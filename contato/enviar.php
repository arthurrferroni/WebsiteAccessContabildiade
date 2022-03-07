<?php
date_default_timezone_set('America/Sao_Paulo');

require_once('src/PHPMailer.php');
require_once('src/SMTP.php');
require_once('src/Exception.php');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

if((isset($_POST['email']) && !empty(trim($_POST['email']))) && (isset($_POST['mensagem']) && !empty(trim($_POST['mensagem'])))) {

	$nome = !empty($_POST['nome']) ? $_POST['nome'] : 'Não informado';
	$email = $_POST['email'];
	$assunto = $_POST['assunto'];
	$mensagem = $_POST['mensagem'];
	$telefone = $_POST['telefone'];
	$data = date('d/m/Y H:i:s');

	$mail = new PHPMailer();
	$mail->CharSet = "utf-8";
	$mail->isSMTP();
	$mail->Host = 'smtp.gmail.com';
	$mail->SMTPAuth = true;
	$mail->Username = 'exemplo@email.com';
	$mail->Password = 'password';
	$mail->Port = 587;

	$mail->setFrom('exemplo@email.com');
	$mail->addAddress('exemplo@email.com');

	$mail->isHTML(true);
	$mail->Subject = $assunto;
	$mail->Body = "Uma nova solicitacão de contato foi enviado pelo formulario de contato do site SEU SITE <br>
	               Nome: {$nome}<br>
				   Email: {$email}<br>
				   Mensagem: {$mensagem}<br>
				   Telefone: {$telefone}<br>
				   Data/hora: {$data}";
				   

	if($mail->send()) {
		echo '<script type="text/javascript"> window.location = "sucesso.php"    </script>';
	} else {
		echo 'Email não enviado.';
	}
} else {
	echo 'Não enviado: informar o email e a mensagem.';
}
