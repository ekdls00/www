<? 
	session_start(); 
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head> 
<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>고객지원 - 공지사항</title>
	<link href="../css/common.css" rel="stylesheet" type="text/css" media="all">
	<link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="./css/greet.css">
	<link rel="stylesheet" href="../sub6/common/css/sub6common.css" />
	<link rel="stylesheet" href="../sub6/css/sub6_content3.css" />
</head>
<?
	@extract($_GET); 
  	@extract($_POST); 
	@extract($_SESSION); 

	include "../lib/dbconn.php";

	if(!$scale)
		$scale=10;			// 한 화면에 표시되는 글 수

    if ($mode=="search") //검색
	{
		if(!$search)
		{
			echo("
				<script>
				 window.alert('검색할 단어를 입력해 주세요!');
			     history.go(-1);
				</script>
			");
			exit;
		}

		$sql = "select * from greet where $find like '%$search%' order by num desc";
	}
	else
	{
		$sql = "select * from greet order by num desc";
	}

	$result = mysql_query($sql, $connect);

	$total_record = mysql_num_rows($result); // 전체 글 수

	// 전체 페이지 수($total_page) 계산 
	if ($total_record % $scale == 0)     
		$total_page = floor($total_record/$scale);      
	else
		$total_page = floor($total_record/$scale) + 1; 
 
	//페이지주소 파라미터로 넘어왔을때 암것도 없으면 1페이지
	if (!$page)                 // 페이지번호($page)가 0 일 때
		$page = 1;              // 페이지 번호를 1로 초기화
 
	//레코드 시작번호(0번부터 시작), 표시할 페이지($page)에 따라 $start 계산
	$start = ($page - 1) * $scale;      

	$number = $total_record - $start;
?>

<body>
<? include "../common/sub_header.html" ?>

<div class="main">
  <img src="../sub6/common/images/title.jpg" alt="" />
  <h3>홍보센터</h3>
</div>

<!-- 서브 네비 영역 -->
<div class="subNav">
  <ul>
	<li><a href="../concert/list.php">언론뉴스</a></li>
	<li><a href="../sub6/sub6_2.html">알미늄소식</a></li>
	<li><a class="current" href="../greet/list.php">공지사항</a></li>
  </ul>
</div>

<!-- 본문 영역 -->
<article id="content">
  <div class="titleArea">
	<div class="lineMap">
	  <span>HOME </span>&gt;<span> 홍보센터 </span>&gt;<strong>
		공지사항</strong>
	</div>
	<h2>공지사항</h2>
  </div>

  <!-- 본문 콘텐츠 영역 -->
  <div class="contentArea">
	<div class="conTitle">
	  <p>
		롯데알미늄의 공지사항을 알려드립니다.
	  </p>
	</div>

	
	<form  name="board_form" method="post" action="list.php?mode=search"> 
	  <div id="list_search">
		<div id="list_search1">▷ 총 <?= $total_record ?> 개의 게시물이 있습니다.  </div>
		<div id="list_search2"><img src="../img/select_search.gif"></div>
		<div id="list_search3">
		  <select name="find">
			<option value='subject'>제목</option>
			<option value='content'>내용</option>
			<option value='nick'>별명</option>
			<option value='name'>이름</option>
		  </select></div>
		<div id="list_search4"><input type="text" name="search"></div>
		<div id="list_search5"><input type="image" src="../img/list_search_button.gif"></div>
	  </div>
	</form>

	<div class="list_count">
	  <label for="scale">리스트개수</label>
	  <select id="scale" name="scale" onchange="location.href='list.php?scale='+this.value">
		<option value=''>보기</option>
		<option value='1'>1</option>
		<option value='2'>2</option>
		<option value='3'>3</option>
		<option value='4'>4</option>
	  </select>
	</div>

	<div class="clear"></div>

	<div id="list_top_title">
	  <ul>
		<li id="list_title1">
		  <img src="../img/list_title1.gif">
		</li>
		<li id="list_title2">
		  <img src="../img/list_title2.gif">
		</li>
		<li id="list_title3">
		  <img src="../img/list_title3.gif">
		</li>
		<li id="list_title4">
		  <img src="../img/list_title4.gif">
		</li>
		<li id="list_title5">
		  <img src="../img/list_title5.gif">
		</li>
	  </ul>		
	</div>

	<div id="list_content">
<?		
   for ($i=$start; $i<$start+$scale && $i < $total_record; $i++)                    
   {
	  mysql_data_seek($result, $i);       
	  // 가져올 레코드로 위치(포인터) 이동  
	  $row = mysql_fetch_array($result);       
	  // 하나의 레코드 가져오기
  
	$item_num     = $row[num];
	$item_id      = $row[id];
	$item_name    = $row[name];
	$item_nick    = $row[nick];
	$item_hit     = $row[hit];
	$item_date    = $row[regist_day];
	$item_date = substr($item_date, 0, 10);  

	// 공백이 있으면 &nbsp로 바꿔서 태그에 넣어야함
	$item_subject = str_replace(" ", "&nbsp;", $row[subject]);

?>
	  <div id="list_item">
		<div id="list_item1"><?= $number ?></div>
		<div id="list_item2">
		  <a href="view.php?num=<?=$item_num?>&page=<?=$page?>&scale=<?=$scale?>"><?= $item_subject ?></a>
		</div> 
		<!-- $page를 안넘기면 이전으로 돌아갈때 검색한 페이지네이션이 없어짐 -->
		<div id="list_item3"><?= $item_nick ?></div>
		<div id="list_item4"><?= $item_date ?></div>
		<div id="list_item5"><?= $item_hit ?></div>
	  </div>
<?
		$number--;
   }
?>
	  <div id="page_button">
	  <div id="page_num"> ◀ 이전 &nbsp;&nbsp;&nbsp;&nbsp; 
<?
   // 게시판 목록 하단(페이지네이션)에 페이지 링크 번호 출력
   for ($i=1; $i<=$total_page; $i++)
   {
	if ($page == $i)     // 현재 페이지 번호 링크 안함
	{
	  echo "<b> $i </b>";
	}
	else
	{ 
	  echo "<a href='list.php?page=$i&scale=$scale'> $i </a>";
	}      
   }
?>			
	  &nbsp;&nbsp;&nbsp;&nbsp;다음 ▶
		</div>
		<div id="button">
		  <!-- 페이지네이션 번호도 같이 넘겨야함 -->
		  <a href="list.php?page=<?=$page?>"><img src="../img/list.png"></a>&nbsp;
<? 
  if($userid)
  {
?>
	<a href="write_form.php?page=<?=$page?>&scale=<?=$scale?>">
	  <img src="../img/write.png">
	</a>
<?
  }
?>
		</div>
	  </div> <!-- end of page_button -->
	
		</div> <!-- end of list content -->

	<div class="clear"></div>
	
	
  </div>
</article>

<? include "../common/sub_footer.html" ?>
</body>
</html>
