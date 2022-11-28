<? session_start(); ?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인</title>
    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="./css/login.css">
    <script src="https://kit.fontawesome.com/f8a0f5a24e.js" crossorigin="anonymous"></script>
</head>
<body>
    <header>
        <a class="logo" href="../index.html">
            <h1 class="hidden">롯데알미늄 로고</h1>
            <img src="../images/logoRed.png" alt="">
        </a>
    </header>
    
    <article id="content">
        <div class="title">
            <h2>로그인</h2>
            <p>가입 시 등록한 아이디와 비밀번호를 입력해주세요.</p>
        </div>
        
        
        <form name="member_form" method="post" action="login.php"> 

            <div id="id_pw_input">
                <ul>
                    <li>
                        <input type="text" name="id" class="login_input" placeholder="아이디를 입력하세요." required> 
                    </li>
                    <li>
                        <input type="password" name="pass" placeholder="비밀번호를 입력하세요."class="login_input" required>
                    </li>
                </ul>						
            </div>
            
            <div id="login_button">
                <button type="submit">로그인</button>
            </div>
            
            <div class="findWrap">
                <ul>
                    <li>
                        <span><a href="id_find.php">아이디 찾기</a></span>
                        <span><a href="pw_find.php">비밀번호 찾기</a></span>
                    </li>
                </ul>
            </div>
            
            <div class="join">
                <span>아직 회원이 아니신가요?</span>
                <a href="../member/join.html">회원가입</a>
            </div>
        </form>
    </article>
</body>
</html>