<? 
	session_start(); 
	/**
	 * $num = 1  >  게시글 
	 * $page / $scale
	 * 
	 */
	
	@extract($_GET); 
  	@extract($_POST); 
  	@extract($_SESSION); 

	include "../lib/dbconn.php";

	$sql = "select * from greet where num=$num";
	$result = mysql_query($sql, $connect);

	$row = mysql_fetch_array($result);       
	// 하나의 레코드 가져오기
	
	$item_num     = $row[num];
	$item_id      = $row[id];
	$item_name    = $row[name];
	$item_nick    = $row[nick];
	$item_hit     = $row[hit];

	$item_date    = $row[regist_day];

	$item_subject = str_replace(" ", "&nbsp;", $row[subject]);

	$item_content = $row[content];
	$is_html      = $row[is_html];

	if ($is_html!="y")
	{
		$item_content = str_replace(" ", "&nbsp;", $item_content);
		$item_content = str_replace("\n", "<br>", $item_content);
	}	

	$new_hit = $item_hit + 1;

	$sql = "update greet set hit=$new_hit where num=$num";   // 글 조회수 증가시킴
	mysql_query($sql, $connect);
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head> 
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>고객지원 - 언론뉴스</title>
<link href="../css/common.css" rel="stylesheet" type="text/css" media="all">
<link rel="stylesheet" href="../common/css/common.css">
<link rel="stylesheet" href="./css/concert.css">
<link rel="stylesheet" href="../sub6/common/css/sub6common.css" />
<link rel="stylesheet" href="../sub6/css/sub6_content3.css" />
<script>
    function del(href) 
    {
		if(confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) {
			document.location.href = href;
		}
    }
</script>
</head>

<body>
<? include "../common/sub_header.html" ?>
<div class="main">
  <img src="../sub6/common/images/title.jpg" alt="" />
  <h3>홍보센터</h3>
</div>

<!-- 서브 네비 영역 -->
<div class="subNav">
  <ul>
	<li><a  href="../concert/list.php">언론뉴스</a></li>
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
	  <p>
		롯데알미늄의 공지사항을 알려드립니다.
	  </p>
	</div>

	
	
	<div id="view_comment"> &nbsp;</div>

<div id="view_title">
	<div id="view_title1"><?= $item_subject ?></div>
	<div id="view_title2">
		<?= $item_nick ?> | 조회 : 
		<?= $item_hit ?> | 
		<?= $item_date ?> 
	</div>	
</div>

<div id="view_content">
	<?= $item_content ?>
</div>

<div id="view_button">
	<a href="list.php?page=<?=$page?>&scale=<?=$scale?>">
		<img src="../img/list.png">
	</a>&nbsp;
<? 
// 관리자, 글쓴이 글 수정, 삭제
if($userid==$item_id || $userlevel==1 || $userid=="admin")
{
?>
<a href="modify_form.php?num=<?=$num?>&page=<?=$page?>&scale=<?=$scale?>">
<img src="../img/modify.png">
</a>&nbsp;
<a href="javascript:del('delete.php?num=<?=$num?>&page=<?=$page?>&scale=<?=$scale?>')">
<img src="../img/delete.png">
</a>&nbsp;
<?
}
?>
<? 
if($userid )
{
?>
		<a href="write_form.php"><img src="../img/write.png"></a>
<?
}
?>
</div>

<div class="clear"></div>

</div> <!-- end of col2 -->
</div> <!-- end of content -->
	
	
  </div>
</article>

<? include "../common/sub_footer.html" ?>
</body>
</html>
