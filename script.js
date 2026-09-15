/* =========================================================
   SMART ATM - STYLE.CSS
========================================================= */


/* RESET */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Segoe UI", sans-serif;
}


/* BODY */

body {

    min-height: 100vh;

    background:
        radial-gradient(
            circle at top left,
            #123b68,
            transparent 40%
        ),

        radial-gradient(
            circle at bottom right,
            #073b4c,
            transparent 40%
        ),

        #050b17;

    color: white;
}


/* COMMON */

.hidden {
    display: none !important;
}


button {
    border: none;
    cursor: pointer;
}


/* =========================================================
   AUTH PAGE
========================================================= */

.container {

    min-height: 100vh;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    padding: 20px;
}


/* LOGO */

.atm-logo {

    text-align: center;

    margin-bottom: 25px;
}


.chip {

    width: 55px;
    height: 40px;

    margin: auto;

    margin-bottom: 10px;

    border-radius: 9px;

    background:
        linear-gradient(
            135deg,
            #00eaff,
            #0077ff
        );

    display: flex;

    align-items: center;

    justify-content: center;

    color: white;

    font-size: 25px;

    box-shadow:
        0 0 25px
        rgba(0,234,255,.5);
}


.atm-logo h1 {

    letter-spacing: 4px;

    font-size: 32px;
}


.atm-logo p {

    color: #8ca4c2;

    margin-top: 5px;
}


/* =========================================================
   AUTH CARD
========================================================= */

.auth-card {

    width: 400px;

    max-width: 100%;

    padding: 35px;

    border-radius: 22px;

    background:
        rgba(255,255,255,.07);

    border:
        1px solid
        rgba(255,255,255,.12);

    backdrop-filter:
        blur(18px);

    box-shadow:

        0 20px 60px
        rgba(0,0,0,.45),

        inset 0 0 30px
        rgba(255,255,255,.02);
}


.auth-card h2 {

    text-align: center;

    font-size: 26px;
}


.subtitle {

    text-align: center;

    color: #91a5bd;

    margin:
        8px 0 25px;
}


/* =========================================================
   INPUTS
========================================================= */

input {

    width: 100%;

    padding: 15px;

    margin-bottom: 15px;

    background:
        rgba(0,0,0,.25);

    border:
        1px solid #28415e;

    border-radius: 12px;

    color: white;

    outline: none;

    font-size: 15px;
}


input::placeholder {
    color: #71859d;
}


input:focus {

    border-color:
        #00d9ff;

    box-shadow:
        0 0 12px
        rgba(0,217,255,.2);
}


/* =========================================================
   AUTH BUTTON
========================================================= */

.auth-card button {

    width: 100%;

    padding: 14px;

    border-radius: 12px;

    background:
        linear-gradient(
            135deg,
            #00d9ff,
            #006eff
        );

    color: white;

    font-size: 16px;

    font-weight: bold;

    transition: .3s;
}


.auth-card button:hover {

    transform:
        translateY(-2px);

    box-shadow:
        0 8px 25px
        rgba(0,180,255,.35);
}


/* SWITCH */

.switch {

    text-align: center;

    margin-top: 20px;

    color: #8da3bd;

    font-size: 14px;
}


.switch span {

    color: #00d9ff;

    cursor: pointer;

    font-weight: bold;
}


#createMessage,
#loginMessage {

    text-align: center;

    margin-top: 15px;

    font-size: 14px;
}


/* =========================================================
   DASHBOARD
========================================================= */

.dashboard {

    width: 100%;

    min-height: 100vh;

    padding: 35px 7%;

    position: relative;
}


/* HEADER */

header {

    display: flex;

    justify-content: space-between;

    align-items: center;

    margin-bottom: 35px;
}


header h1 {

    letter-spacing: 3px;
}


header p {

    color: #8299b4;

    margin-top: 5px;
}


/* LOGOUT */

.logout {

    padding:
        11px 22px;

    border-radius: 10px;

    background:
        rgba(255,255,255,.08);

    border:
        1px solid
        rgba(255,255,255,.15);

    color: white;

    transition: .3s;
}


.logout:hover {

    background: #ff4757;

    transform:
        translateY(-2px);
}


/* =========================================================
   BALANCE CARD
========================================================= */

.balance-card {

    position: relative;

    overflow: hidden;

    max-width: 850px;

    min-height: 190px;

    padding: 35px;

    border-radius: 25px;

    background:

        linear-gradient(
            135deg,
            #0b4d75,
            #07305a,
            #07192e
        );

    box-shadow:

        0 20px 50px
        rgba(0,0,0,.4);

    border:
        1px solid
        rgba(255,255,255,.12);

    margin-bottom: 35px;
}


.balance-card::before {

    content: "";

    position: absolute;

    width: 250px;

    height: 250px;

    border-radius: 50%;

    background:
        rgba(0,229,255,.08);

    right: -80px;

    top: -100px;
}


.balance-card p {

    color: #9eb5ce;

    font-size: 13px;

    letter-spacing: 2px;
}


.balance-card h2 {

    margin-top: 15px;

    font-size: 43px;
}


/* CARD CHIP */

.card-chip {

    position: absolute;

    right: 40px;

    top: 40px;

    width: 60px;

    height: 45px;

    border-radius: 10px;

    background:

        linear-gradient(
            135deg,
            #f4d35e,
            #b58b20
        );

    display: flex;

    align-items: center;

    justify-content: center;

    font-size: 25px;

    color: #342600;
}


/* =========================================================
   MENU
========================================================= */

.menu {

    max-width: 850px;

    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 20px;
}


.menu-card {

    padding: 25px;

    border-radius: 20px;

    background:
        rgba(255,255,255,.055);

    border:
        1px solid
        rgba(255,255,255,.1);

    transition: .3s;

    cursor: pointer;
}


.menu-card:hover {

    transform:
        translateY(-6px);

    background:
        rgba(255,255,255,.09);

    border-color:
        #00d9ff;

    box-shadow:
        0 15px 35px
        rgba(0,0,0,.25);
}


/* ICON */

.icon {

    width: 50px;

    height: 50px;

    border-radius: 14px;

    display: flex;

    align-items: center;

    justify-content: center;

    font-size: 25px;

    margin-bottom: 15px;
}


.deposit-icon {

    background:
        rgba(0,255,170,.12);

    color: #00ffaa;
}


.withdraw-icon {

    background:
        rgba(255,90,90,.12);

    color: #ff6666;
}


.balance-icon {

    background:
        rgba(0,190,255,.12);

    color: #00d9ff;
}


.statement-icon {

    background:
        rgba(180,120,255,.12);

    color: #b77cff;
}


.menu-card h3 {

    margin-bottom: 6px;
}


.menu-card p {

    color: #8299b4;

    font-size: 14px;
}


/* =========================================================
   POPUP OVERLAY
========================================================= */

.modal-overlay {

    position: fixed;

    inset: 0;

    width: 100%;
    height: 100%;

    background:
        rgba(0,0,0,.75);

    backdrop-filter:
        blur(9px);

    -webkit-backdrop-filter:
        blur(9px);

    display: flex;

    align-items: center;

    justify-content: center;

    padding: 20px;

    z-index: 9999;
}


/* =========================================================
   POPUP BOX
========================================================= */

.transaction-box {

    position: relative;

    width: 100%;

    max-width: 450px;

    padding: 35px;

    border-radius: 25px;

    background:

        linear-gradient(
            145deg,
            #18283d,
            #0b1728
        );

    border:
        1px solid
        rgba(255,255,255,.14);

    box-shadow:

        0 30px 90px
        rgba(0,0,0,.65);

    backdrop-filter:
        blur(18px);

    text-align: center;

    animation:
        popupOpen .25s ease;
}


/* ANIMATION */

@keyframes popupOpen {

    from {

        opacity: 0;

        transform:
            scale(.82)
            translateY(25px);
    }

    to {

        opacity: 1;

        transform:
            scale(1)
            translateY(0);
    }
}


/* =========================================================
   CLOSE BUTTON
========================================================= */

.close {

    position: absolute;

    right: 18px;

    top: 15px;

    width: 38px;

    height: 38px;

    border-radius: 50%;

    background:
        rgba(255,255,255,.08);

    color: #a8b8ca;

    font-size: 25px;

    display: flex;

    align-items: center;

    justify-content: center;

    transition: .25s;

    z-index: 5;
}


.close:hover {

    background:
        #ff4757;

    color: white;

    transform:
        rotate(90deg);
}


/* =========================================================
   POPUP ICON
========================================================= */

.popup-icon {

    width: 65px;

    height: 65px;

    margin:
        0 auto 18px;

    border-radius: 18px;

    display: flex;

    align-items: center;

    justify-content: center;

    background:
        rgba(0,217,255,.12);

    border:
        1px solid
        rgba(0,217,255,.18);

    color: #00d9ff;

    font-size: 30px;
}


/* POPUP TITLE */

.transaction-box h2 {

    font-size: 27px;

    margin-bottom: 8px;
}


.popup-subtitle {

    text-align: center;

    color: #91a5bd;

    font-size: 14px;

    margin-bottom: 25px;
}


/* =========================================================
   POPUP INPUTS
========================================================= */

.transaction-box input {

    width: 100%;

    padding: 15px;

    margin-bottom: 15px;

    background:
        rgba(0,0,0,.3);

    border:
        1px solid #304761;

    border-radius: 12px;

    color: white;

    outline: none;

    font-size: 15px;
}


.transaction-box input:focus {

    border-color:
        #00d9ff;

    box-shadow:
        0 0 12px
        rgba(0,217,255,.18);
}


/* =========================================================
   POPUP BUTTON
========================================================= */

.transaction-box
button:not(.close) {

    width: 100%;

    padding: 14px;

    border-radius: 12px;

    background:

        linear-gradient(
            135deg,
            #00d9ff,
            #006eff
        );

    color: white;

    font-size: 16px;

    font-weight: bold;

    transition: .3s;
}


.transaction-box
button:not(.close):hover {

    transform:
        translateY(-2px);

    box-shadow:
        0 8px 25px
        rgba(0,180,255,.35);
}


/* =========================================================
   TRANSACTION MESSAGES
========================================================= */

#securityMessage {

    font-size: 13px;

    margin:
        -5px 0 12px;

    line-height: 1.5;
}


#transactionMessage {

    text-align: center;

    margin-top: 15px;

    font-size: 14px;

    font-weight: 600;
}


/* =========================================================
   BALANCE POPUP
========================================================= */

.balance-popup {

    max-width: 430px;
}


.balance-popup-icon {

    background:
        rgba(0,190,255,.12);

    color: #00d9ff;
}


.big-balance {

    margin:
        20px 0 25px;

    padding: 25px;

    border-radius: 18px;

    background:
        rgba(0,217,255,.07);

    border:
        1px solid
        rgba(0,217,255,.15);

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 8px;
}


.big-balance span {

    font-size: 24px;

    color: #00d9ff;
}


.big-balance strong {

    font-size: 38px;

    color: white;
}


/* =========================================================
   FRAUD POPUP
========================================================= */

.fraud-popup {

    max-width: 440px;

    border-color:
        rgba(255,70,70,.3);
}


.fraud-icon {

    width: 70px;

    height: 70px;

    margin:
        0 auto 18px;

    border-radius: 50%;

    display: flex;

    align-items: center;

    justify-content: center;

    background:
        rgba(255,70,70,.12);

    border:
        1px solid
        rgba(255,70,70,.2);

    font-size: 32px;
}


.fraud-question {

    color: #d5deea;

    line-height: 1.5;

    margin-bottom: 18px;
}


.block-button {

    background:

        linear-gradient(
            135deg,
            #ff5252,
            #c62828
        ) !important;

    margin-top: 12px !important;
}


/* =========================================================
   MINI STATEMENT
========================================================= */

.statement-box {

    position: relative;

    width: 100%;

    max-width: 600px;

    max-height: 80vh;

    overflow-y: auto;

    padding: 35px;

    border-radius: 25px;

    background:

        linear-gradient(
            145deg,
            #18283d,
            #0b1728
        );

    border:
        1px solid
        rgba(255,255,255,.14);

    box-shadow:
        0 30px 90px
        rgba(0,0,0,.65);

    backdrop-filter:
        blur(18px);

    animation:
        popupOpen .25s ease;
}


.statement-popup-icon {

    background:
        rgba(180,120,255,.12);

    color:
        #b77cff;
}


/* STATEMENT LIST */

#statementList {

    margin-top: 15px;

    max-height: 350px;

    overflow-y: auto;

    padding-right: 4px;
}


/* STATEMENT ITEM */

.statement-item {

    display: flex;

    justify-content: space-between;

    align-items: center;

    gap: 15px;

    padding: 15px;

    margin-bottom: 10px;

    border-radius: 14px;

    background:
        rgba(0,0,0,.22);

    border:
        1px solid
        rgba(255,255,255,.06);

    transition: .2s;
}


.statement-item:hover {

    background:
        rgba(255,255,255,.06);

    transform:
        translateX(3px);
}


.statement-item small {

    color:
        #71869f;

    font-size: 11px;
}


/* COLORS */

.deposit {

    color:
        #00ffaa;
}


.withdraw {

    color:
        #ff6666;
}


/* EMPTY */

.empty-statement {

    padding: 30px;

    text-align: center;

    border-radius: 15px;

    background:
        rgba(255,255,255,.04);

    color:
        #8299b4;
}


/* TOTAL */

.statement-total {

    margin-top: 20px;

    padding: 18px;

    border-radius: 14px;

    background:
        rgba(0,217,255,.07);

    border:
        1px solid
        rgba(0,217,255,.12);

    display: flex;

    justify-content: space-between;

    align-items: center;
}


.statement-total span {

    color:
        #9aacc0;
}


.statement-total strong {

    color:
        #00d9ff;

    font-size: 19px;
}


/* =========================================================
   SCROLLBAR
========================================================= */

.statement-box::-webkit-scrollbar,
#statementList::-webkit-scrollbar {

    width: 6px;
}


.statement-box::-webkit-scrollbar-track,
#statementList::-webkit-scrollbar-track {

    background:
        rgba(255,255,255,.03);

    border-radius: 10px;
}


.statement-box::-webkit-scrollbar-thumb,
#statementList::-webkit-scrollbar-thumb {

    background:
        #31516d;

    border-radius: 10px;
}


/* =========================================================
   EMERGENCY LOCK
========================================================= */

.emergency-area {

    position: absolute;

    right: 35px;

    top: 50%;

    transform:
        translateY(-50%);

    width: 190px;

    text-align: center;
}


.emergency-button {

    width: 175px;

    min-height: 78px;

    padding: 13px;

    border-radius: 12px;

    background:

        linear-gradient(
            135deg,
            #ff3b3b,
            #b40000
        );

    color: white;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    gap: 5px;

    box-shadow:
        0 10px 30px
        rgba(255,0,0,.22);

    transition: .3s;
}


.emergency-button:hover {

    transform:
        translateY(-4px);

    box-shadow:
        0 15px 35px
        rgba(255,0,0,.35);
}


.emergency-icon {

    font-size: 22px;
}


.emergency-button h4 {

    font-size: 12px;

    letter-spacing: 1px;
}


.emergency-area p {

    margin-top: 10px;

    font-size: 12px;

    color: #ffe600;

    line-height: 1.4;
}


/* =========================================================
   TABLET
========================================================= */

@media(max-width:1100px) {

    .emergency-area {

        position: static;

        transform: none;

        width: 100%;

        margin-top: 35px;
    }


    .emergency-button {

        margin: auto;
    }

}


/* =========================================================
   MOBILE
========================================================= */

@media(max-width:600px) {

    .container {

        padding: 15px;
    }


    .atm-logo h1 {

        font-size: 25px;

        letter-spacing: 3px;
    }


    .auth-card {

        padding:
            25px 20px;
    }


    .dashboard {

        padding:
            25px 5%;
    }


    header {

        align-items:
            flex-start;

        gap: 15px;
    }


    header h1 {

        font-size: 22px;
    }


    header p {

        font-size: 12px;
    }


    .logout {

        padding:
            9px 15px;

        font-size: 12px;
    }


    .balance-card {

        min-height: 165px;

        padding: 25px;

        margin-bottom: 25px;
    }


    .balance-card h2 {

        font-size: 32px;
    }


    .card-chip {

        right: 20px;

        top: 25px;

        width: 50px;

        height: 38px;

        font-size: 20px;
    }


    .menu {

        grid-template-columns:
            1fr;

        gap: 15px;
    }


    .menu-card {

        padding: 20px;
    }


    /* POPUP */

    .modal-overlay {

        padding: 15px;
    }


    .transaction-box,
    .statement-box {

        padding:
            28px 20px;

        border-radius: 20px;

        max-height: 90vh;
    }


    .transaction-box h2 {

        font-size: 23px;
    }


    .popup-icon {

        width: 55px;

        height: 55px;

        font-size: 25px;
    }


    .big-balance strong {

        font-size: 30px;
    }


    .statement-item {

        padding: 12px;

        font-size: 13px;
    }


    .emergency-area {

        margin-top: 30px;
    }

}


/* =========================================================
   SMALL MOBILE
========================================================= */

@media(max-width:380px) {

    .atm-logo h1 {

        font-size: 22px;
    }


    .auth-card {

        padding:
            20px 15px;
    }


    .transaction-box,
    .statement-box {

        padding:
            25px 16px;
    }


    .balance-card h2 {

        font-size: 28px;
    }

}