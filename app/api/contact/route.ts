import { NextRequest, NextResponse } from 'next/server';
   import nodemailer from 'nodemailer';

   export async function POST(request: NextRequest) {
     try {
       const { name, email, message } = await request.json();

       // 入力値の検証
       if (!name || !email || !message) {
         return NextResponse.json(
           { error: 'すべてのフィールドを入力してください。' },
           { status: 400 }
         );
       }

       // メール設定（環境変数から取得）
       const transporter = nodemailer.createTransport({
         host: process.env.SMTP_HOST,
         port: parseInt(process.env.SMTP_PORT || '587'),
         secure: false,
         auth: {
           user: process.env.SMTP_USER,
           pass: process.env.SMTP_PASS,
         },
       });

       // メール送信
       await transporter.sendMail({
         from: process.env.SMTP_FROM,
         to: process.env.SMTP_TO,
         subject: `お問い合わせ: ${name}様より`,
         text: `
   名前: ${name}
   メールアドレス: ${email}
   お問い合わせ内容:
   ${message}
         `,
         html: `
           <h2>お問い合わせフォームからのメッセージ</h2>
           <p><strong>名前:</strong> ${name}</p>
           <p><strong>メールアドレス:</strong> ${email}</p>
           <p><strong>お問い合わせ内容:</strong></p>
           <p>${message.replace(/\n/g, '<br>')}</p>
         `,
       });

       return NextResponse.json(
         { message: 'お問い合わせを受け付けました。ありがとうございます。' },
         { status: 200 }
       );

     } catch (error) {
       console.error('メール送信エラー:', error);
       return NextResponse.json(
         { error: 'メール送信に失敗しました。しばらく後でお試しください。' },
         { status: 500 }
       );
     }
   }