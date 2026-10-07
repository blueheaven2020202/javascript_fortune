/// JavaScript

const drawButton = document.querySelector('#drawButton');
const resultDisplay = document.querySelector('#resultDisplay');

drawButton.addEventListener('click', () => {

    // 0から1未満のランダムな数字を生成する
    const randomNumber = Math.random();

    console.log(randomNumber); // ランダムな数字をコンソールに表示する（確認用）

    // 既存のクラスを削除
    resultDisplay.className = '';
    document.body.className = '';

    // 0.3 未満だったら
    if (randomNumber < 0.3) {
        resultDisplay.textContent = '大吉';
        document.body.classList.add('daikichi');

    // 0.8 未満だったら
    } else if (randomNumber < 0.8) {
        resultDisplay.textContent = '中吉';
        document.body.classList.add('chukichi');

    // 0.4未満だったら
    } else if (randomNumber < 0.4) {
        resultDisplay.textContent = '末吉';
        document.body.classList.add('suekichi');

    // 0.6未満だったら
    } else if (randomNumber < 0.6) {
        resultDisplay.textContent = '小吉';
        document.body.classList.add('shokichi');

    // どちらでもない場合
    } else {
        resultDisplay.textContent = '凶';
        document.body.classList.add('kyou');
    }

    });