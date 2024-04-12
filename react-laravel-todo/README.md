<h1>**概要</h1>
<hr/>
<p>
現在モダンjavaScriptを学習中。せっかくなのでバックエンド側をfirebaseではなく、使ったことがあるlaravelでtodoアプリを作成することにしました。
</p>

<h2>使用環境</h2>
<p>
 <ul>
<li>
    PC：Apple M1 チップ搭載MacBook Air
</li>
    <li>
     OS：macOS Monterey 12.7.1   
    </li>
     <li>MAMP：6.8</li>
     <li>PHP：8.2.0</li>
     <li>Laravel：11.3.1</li>
 </ul>
</p>

<h2>注意点</h2>
<p>
composerを導入してlaravelの環境を整える際、色々な記事を参考にするよりcomposerのドキュメントの手順をまず参考にしたほうがよいです。
というのもcomposerのセットアップの2行目に問題があるからです。
</p>
<br/>
<br/>
<br/>

<p>
    php -r "if (hash_file('sha384', 'composer-setup.php') === 'dac665fdc30fdd8ec78b38b9800061b4150413ff2e3b6f88543c636f7cd84f6db9189d43a81e5503cda447da73c7e5b6') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
</p>

<br/>
<br/>


<p>こちらcomposerの公式ドキュメントに記載されてあるものです。



ご覧の通り composer-setup.phpとハッシュ値を比較することで、オリジナルファイルかどうかを検証します。




こちらの値はcomposerのバージョンアップで変化しますので、


古い記事では確実に動かず、新しい記事でもタイミングによってはインストールできないこともあります。



すぐにこのことに気づけばいいですが無駄に調べて時間をかけるのは勿体無いので、必ずドキュメントを確認すべきだと思います。

https://getcomposer.org/download/
</p>
