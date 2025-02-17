import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div>
            <h2>Felhasználói Feltételek (Terms of Service)</h2>
            <p><strong>1. A szolgáltatás leírása</strong></p>
            <p>A weboldal célja, hogy a felhasználók számára információkat biztosítson a helyi autószerelőkről, autómosókról, alkatrészkereskedőkről és egyéb járműszolgáltatókról.</p>

            <p><strong>2. A felhasználók kötelezettségei</strong></p>
            <p>A felhasználóknak biztosítaniuk kell, hogy minden általuk megadott információ pontos és valós legyen. A weboldal nem felelős az adatok pontosságáért.</p>

            <p><strong>3. A szolgáltatás elérhetősége</strong></p>
            <p>A weboldal célja a felhasználók számára folyamatos elérhetőség biztosítása, azonban nem garantáljuk a szolgáltatás folyamatos működését.</p>

            <p><strong>4. Felelősség kizárása</strong></p>
            <p>A weboldal nem vállal felelősséget semmilyen közvetlen vagy közvetett kárért, amely a szolgáltatás használatából eredhet.</p>

            <p><strong>5. A felhasználói adatok védelme</strong></p>
            <p>A weboldal az Ön által megadott személyes adatokat az adatvédelmi nyilatkozatban meghatározott módon kezeli.</p>

            <p><strong>6. Szellemi tulajdon</strong></p>
            <p>A weboldalon található összes szöveg, grafika és tartalom a weboldal tulajdonát képezi, és jogvédett.</p>

            <p><strong>7. A felhasználási feltételek módosítása</strong></p>
            <p>A weboldal fenntartja a jogot, hogy bármikor módosítsa a felhasználói feltételeket. A módosított feltételek a weboldalon való közzététel után érvényesek.</p>
        </div>
    );
};

export default LoginPage;
