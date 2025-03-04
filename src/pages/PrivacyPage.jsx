import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div>
            <h1>Adatvédelmi Nyilatkozat (Privacy Policy)</h1>
            <p><strong>1. Adatkezelő és elérhetőségek</strong></p>
            <p>Az adatkezelő: Vencz László (a weboldal üzemeltetője)</p>
            <p>Elérhetőség: [email cím vagy elérhetőség, ha van]</p>

            <p><strong>2. Milyen adatokat gyűjtünk?</strong></p>
            <ul>
                <li>Név</li>
                <li>E-mail cím</li>
            </ul>

            <p><strong>3. Hogyan használjuk fel az adatokat?</strong></p>
            <p>Az adatokat kizárólag a felhasználói élmény javítása és a szolgáltatásaink biztosítása érdekében használjuk. Az adatokat nem osztjuk meg harmadik féllel.</p>

            <p><strong>4. Az adatok tárolása és védelme</strong></p>
            <p>A begyűjtött adatokat biztonságosan tároljuk, és minden szükséges intézkedést megteszünk annak érdekében, hogy megvédjük azokat a jogosulatlan hozzáférés, módosítás vagy törlés ellen.</p>

            <p><strong>5. Adatkezelési jogok</strong></p>
            <p>A felhasználók bármikor kérhetik az általuk megadott adatokhoz való hozzáférést, azok törlését vagy módosítását, azonban jelenleg nincs lehetőségük adatkezelési jogok gyakorlására a weboldalon keresztül.</p>

            <p><strong>6. Kapcsolat</strong></p>
            <p>Ha bármilyen kérdése van az adatkezeléssel kapcsolatban, kérjük, lépjen kapcsolatba velünk a következő elérhetőségek egyikén: [E-mail cím]</p>
        </div>
    );
};

export default LoginPage;
