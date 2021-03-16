import React from "react";
import './commissions.css';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";

export default function CommissionPage() {
    return (
        <div id="comissionsPage" className="about">
            <h1 className="main">Commissions</h1>
            <section id="commissionStoles" className="blurb">
                <h2>Stoles &#38; Decon-Stoles</h2>
                <br></br>
                <p>Duis enim ullamco excepteur cillum commodo deserunt Lorem in occaecat id incididunt quis anim cillum. Aliquip excepteur sint tempor labore fugiat nulla aliqua nisi aliquip commodo. Incididunt nisi elit aliquip aute commodo. Voluptate occaecat est nisi ad aute proident ullamco laboris nulla sit anim voluptate ullamco. Aliqua ea ut deserunt ex sit tempor. Sit excepteur in enim mollit veniam. Labore cillum esse id magna cillum ea labore eu.</p>
                <div className="custOrderBtns">
                    <Button className="orderBtn">
                        <Link  to="/custom-order" className={window.location.pathname === "/custom-order" ? "nav-link active" : "nav-link"}>
                            Custom-Order Stole
                        </Link>
                    </Button>
                    <Button className="orderBtn">
                        <Link to="/custom-order" className={window.location.pathname === "/custom-order" ? "nav-link active" : "nav-link"}>
                            Custom-Order Decon-Stole
                         </Link>
                    </Button>
                </div>
            </section>
            <section id="commissionScapulars" className="blurb">
                <h2>Scapulars &#38; Chasables</h2>
                <br></br>
                <p>Scapulars: Aliqua Lorem elit commodo mollit pariatur proident ad aliqua magna aute fugiat tempor. Officia sunt id cupidatat elit mollit culpa. Ullamco ut nulla sunt mollit eiusmod. Amet consequat nisi labore veniam voluptate amet. Anim sint pariatur amet ea dolore dolore in. Dolor id et tempor est in cillum culpa ipsum esse.</p>
                <br></br>
                <p>Chasabels: Tempor eu quis nostrud reprehenderit do ipsum non laborum. Qui sint nisi tempor ea ipsum ad ut enim adipisicing fugiat. Ex mollit adipisicing nisi velit Lorem officia. Cillum minim elit sint labore fugiat nisi. Elit ex reprehenderit mollit esse officia eiusmod voluptate enim duis amet duis in. Pariatur commodo eiusmod est cupidatat est laboris ipsum esse voluptate voluptate ea do veniam. Dolore proident anim mollit laboris ut enim occaecat consectetur cillum est.</p>
            </section>
            <section id="commissionBanners" className="blurb">
                <h2>Paraments &#38; Banners</h2>
                <br></br>
                <p>Paraments: Veniam incididunt consequat dolore id et. Id adipisicing sint enim fugiat labore. Aliquip veniam ullamco do ut do labore fugiat enim ipsum laborum nisi.</p>
                <br></br>
                <p>Banners: Non ut consectetur in dolor dolor elit pariatur eu veniam esse. Nulla ut ex id proident eu incididunt et amet nostrud ut mollit officia. Occaecat duis mollit quis nulla Lorem. Do labore incididunt sunt consectetur incididunt laboris cillum excepteur tempor sunt id. Ea ullamco qui magna aliqua consequat enim ullamco nostrud id commodo nostrud mollit enim tempor. Quis laboris fugiat elit sit ullamco ipsum in anim ex. Nostrud proident cupidatat officia nulla anim cupidatat aute pariatur ut duis nostrud.</p>
            </section>
        </div>
    )
}