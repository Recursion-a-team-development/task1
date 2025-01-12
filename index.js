/**
 * @type {string[]} 表示するメッセージの配列
 */
const messages = [
    "Hello Recursion",
    "Cmaloさん、Francoさん 2週間と短い間ですがよろしくお願いします!!",
    "りーげるさん、Francoさん 私の至らない点が多々あると思いますが2週間よろしくお願いいたします。",
    "りーげるさん、Cmaloさん 短い期間ではありますが2週間よろしくお願いいたします。"
];

/**
 * @type {number} 現在表示しているメッセージのインデックス
 */
let currentMessageIndex = 0;

/**
 * メッセージを次に切り替える
 *
 * @returns {void}
 */
function changeMessage() {
    // 配列の範囲内に収めるために剰余演算を使用
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
    document.getElementById("message").textContent = messages[currentMessageIndex];
}