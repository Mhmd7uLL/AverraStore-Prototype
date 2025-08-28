const urlParams = new URLSearchParams(window.location.search);
    const topik = urlParams.get('topik');
    const judul = document.getElementById('judul');
    const konten = document.getElementById('game-konten');
    const gambar = document.getElementById('gameicon')
    const titlegame = document.getElementById('game-title')
    const tombol = document.querySelectorAll('.btn-item');
    const tombolpay = document.querySelectorAll('.payment-type');
    const note = document.getElementById('note');
    const titleweb = document.getElementById('title-web');

    /*    GAME ITEM 1    */
    const gItem1 = document.getElementById('g-item1');
    const gItem2 = document.getElementById('g-item2');
    
    /*    GAME ITEM 2    */
    const gItem3 = document.getElementById('g-item3');
    const gItem4 = document.getElementById('g-item4');
    const gItem5 = document.getElementById('g-item5');
    
    /*    GAME ITEM 3    */
    const gItem6 = document.getElementById('g-item6');
    const gItem7 = document.getElementById('g-item7');

    tombol.forEach((btnItem) => {
        btnItem.addEventListener("click", () => {
            tombol.forEach(btn => btn.classList.remove('aktif')); 
            btnItem.classList.add("aktif"); 
        });
    });

    tombolpay.forEach((btnItemPay) => {
        btnItemPay.addEventListener("click", () => {
            tombolpay.forEach(btnpay => btnpay.classList.remove('aktif'));
            btnItemPay.classList.add('aktif');
        });
    });

    switch(topik) {
        case 'Genshin':;
            titleweb.innerText = 'Genshin Impact - PAGE';
            titlegame.innerText = 'Genshin Impact';
            gambar.src = 'assets/game icons/Genshin Impact.jpeg';
            note.innerText = 'Menawarkan beberapa pilihan pembelian. Seperti Welkin Moon, Gnostic Hymn, Genesis crystal, dll.';
            break;
        case 'Zenless':
            titleweb.innerText = 'Zenless Zone Zero - PAGE';
            titlegame.innerText = 'Zenless Zone Zero';
            gambar.src = 'assets/game icons/ZZZ.jpeg';
            note.innerText = 'Menawarkan beberapa pilihan pembelian. Seperti Monochrome, Inter-Knot Membership, dll.';

            /*    MEMBERSHIP    */
            gItem1.innerText = 'Inter-Knot Membership 1x';
            gItem2.innerText = 'Inter-Knot Membership 2x';

            /*      GEMS        */
            gItem3.innerText = '60 Monochrome';
            gItem4.innerText = '300 + 30 Monochrome';
            gItem5.innerText = '980 + 110 Monochrome';

            /*    BATTLE PASS   */
            gItem6.innerText = 'Eridu City Fund';
            gItem7.innerText = 'Eridu City Fund Maxx';
            break;
        case 'HSR':
            titleweb.innerText = 'Honkai Star Rail - PAGE';
            titlegame.innerText = 'Honkai: Star Rail';
            gambar.src = 'assets/game icons/HSR.jpeg';
            note.innerText = 'Menawarkan beberapa pilihan pembelian. Seperti Oneiric Shard, Express Supply pass, dll.';
            
            /*    MEMBERSHIP    */
            gItem1.innerText = 'Express Supply Pass 1x';
            gItem2.innerText = 'Express Supply Pass 2x';

            /*      GEMS        */
            gItem3.innerText = '60 Oneiric Shards';
            gItem4.innerText = '300 + 30 Oneiric Shards';
            gItem5.innerText = '980 + 110 Oneiric Shards';

            /*    BATTLE PASS   */
            gItem6.innerText = 'Nameless Glory';
            gItem7.innerText = 'Nameless Medal';
            break;
        case 'Wuwa':
            titleweb.innerText = 'Wuthering Waves - PAGE';
            titlegame.innerText = 'Wuthering Waves';
            gambar.src = 'assets/game icons/wuwa.jpeg';
            note.innerText = 'Menawarkan beberapa pilihan pembelian. Seperti Lunites, Lunites Subscription';
            
            /*    MEMBERSHIP    */
            gItem1.innerText = 'Lunites Subscription 1x';
            gItem2.innerText = 'Lunites Subscription 2x';

            /*      GEMS        */
            gItem3.innerText = '300 Lunites + Bonus';
            gItem4.innerText = '980 Lunites + Bonus';
            gItem5.innerText = '1980 Lunites + Bonus';

            /*    BATTLE PASS   */
            gItem6.innerText = "Champion's Forging Collection ";
            gItem7.innerText = "Champion's Radiant Collection";
            break;
        default:
            titlegame.innerText = 'Topik Tidak Dikenal';
}