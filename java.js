// 1. ここに家族の名前を入れてください（最大10名まで推奨）
const familyNames = ["お父さん", "お母さん", "太郎", "花子", "ポチ"];

const board = document.getElementById('member-board');

function createBoard() {
    familyNames.forEach((name, index) => {
        // 保存された状態を読み込む（なければ外出中 'away'）
        const savedStatus = localStorage.getItem(`status-${index}`) || 'away';

        // ボタン（カード）の作成
        const btn = document.createElement('button');
        btn.className = `member-card ${savedStatus}`;
        btn.id = `member-${index}`;
        
        // 中身のテキスト作成
        btn.innerHTML = `
            <span class="name">${name}</span>
            <span class="status-text">${savedStatus === 'home' ? '在宅中' : '外出中'}</span>
        `;

        // クリックした時の処理
        btn.onclick = () => {
            const isHome = btn.classList.contains('home');
            if (isHome) {
                // 外出中に変更
                btn.classList.replace('home', 'away');
                btn.querySelector('.status-text').textContent = '外出中';
                localStorage.setItem(`status-${index}`, 'away');
            } else {
                // 在宅中に変更
                btn.classList.replace('away', 'home');
                btn.querySelector('.status-text').textContent = '在宅中';
                localStorage.setItem(`status-${index}`, 'home');
            }
        };

        board.appendChild(btn);
    });
}

// 実行
createBoard();