 <?php
$to = 'pochta@pktitan.ru';

if ( isset( $_POST['sendMail'] ) ) {
  $name  = substr( $_POST['name'], 0, 64 );
  $tel = substr( $_POST['tel'], 0, 64 );

  $body = "Имя:\r\n".$name."\r\n";
  $body .= "Контактный номер:\r\n".$tel."\r\n";

  send_mail($to, $body);

}




// Вспомогательная функция для отправки почтового сообщения с вложением
function send_mail($to, $body, $email, $filepath, $filename)
{
  $subject = "=?utf-8?B?". base64_encode("Заявка на обратный звонок с лендинга воздуховоды ПКТИТАН"). "?=";
  $boundary = "--".md5(uniqid(time())); // генерируем разделитель
  $headers = "From: info@pktitan.ru\r\n";
    $headers .= "Bcc: sd@pktitan.ru\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .="Content-Type: multipart/mixed; boundary=\"".$boundary."\"\r\n";
  $multipart = "--".$boundary."\r\n";
  $multipart .= "Content-type: text/plain; charset=\"utf-8\"\r\n";
  $multipart .= "Content-Transfer-Encoding: quoted-printable\r\n\r\n";

  $body = $body."\r\n\r\n";

  $multipart .= $body;

  $file = '';
  if ( !empty( $filepath ) ) {
    $fp = fopen($filepath, "r");
    if ( $fp ) {
      $content = fread($fp, filesize($filepath));
      fclose($fp);
      $file .= "--".$boundary."\r\n";
      $file .= "Content-Type: application/octet-stream\r\n";
      $file .= "Content-Transfer-Encoding: base64\r\n";
      $file .= "Content-Disposition: attachment; filename=\"".$filename."\"\r\n\r\n";
      $file .= chunk_split(base64_encode($content))."\r\n";
    }
  }
  $multipart .= $file."--".$boundary."--\r\n";
	mail($to, $subject, $multipart, $headers);
}
?>