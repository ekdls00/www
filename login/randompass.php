<?

function generateRandomPassword($length=8, $strength=0) { // strength -> 

    $vowels = 'aeuy';

    $consonants = 'bdghjmnpqrstvz';

    if ($strength & 1) {

        $consonants .= 'BDGHJLMNPQRSTVWXZ'; //. -> +

    }

    if ($strength & 2) {

        $vowels .= "AEUY";

    }

    if ($strength & 4) {

        $consonants .= '23456789';

    }

    if ($strength & 8) {

        $consonants .= '@#$%';

    }


    $password = '';

    $alt = time() % 2;   // 난수 사용을 위해 만든 것

    for ($i = 0; $i < $length; $i++) {

        if ($alt == 1) {

            $password .= $consonants[(rand() % strlen($consonants))];
            // 패스워드라는 변수에 랜덤으로 어쩌구해서 숫자 값이 나오게 만든느 것

            $alt = 0;

        } else {

            $password .= $vowels[(rand() % strlen($vowels))];

            $alt = 1;

        }

    }

    return $password;

}


$ranpass = generateRandomPassword(8,8);

echo "$ranpass";

?>