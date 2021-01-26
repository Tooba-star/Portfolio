import React, { Component } from 'react';

class Teachers extends Component {
    render() {
        return (
            <div className="container" >
                {/* // < !--Section: Team v.1-- > */}
                <section className="team-section pb-5">

                    {/* <!--Section heading--> */}
                    <h2 className="h1 text-center pt-2 pb-2">Great Teachers</h2>
                    {/* <!--Section description--> */}
                    <p className="grey-text pb-3 text-center">Legends are material to be molded, and not facts to be recorded.</p>

                    {/* <!-- Grid row --> */}
                    <div className="row text-center">

                        {/* <!-- Grid column --> */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="card card-body">
                                <div className="avatar mx-auto my-3">
                                    <img style={{ width: 170, height: 170 }} src="https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.0-9/69832812_10219828841853023_1851923678229430272_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEqJbPDlKUD7tEiWVuyUvk9j1lmJENIEkOPWWYkQ0gSQ-TXbu2EQDgNGvJebSCfe2XQo6r82pgr6XLLYEbcMSjo&_nc_ohc=40TLyPiislwAX_uuYAB&_nc_ht=scontent.fkhi17-1.fna&oh=73cea57b17e1c9eabab2a2e4c6413f56&oe=5FF70145" className="rounded-circle img-fluid" alt="Faiza Aziz Khan" />
                                </div>
                                <h5 className="font-weight-bold">
                                    <strong>Faiza Aziz Khan</strong>
                                </h5>
                                <p className="grey-text">Mearn Stack Developer</p>

                                <ul className="list-unstyled">
                                    {/* <!-- Facebook --> */}
                                    <a onClick={() => window.open("https://www.facebook.com/faiza.aziz.188", "_blank")} className="icons-sm fb-ic p-1">
                                        <i className="fa fa-facebook blue-text"> </i>
                                    </a>
                                    {/* <!-- Twitter --> */}
                                    <a onClick={() => window.open("", "_blank")} className="icons-sm tw-ic p-1">
                                        <i className="fa fa-twitter blue-text"> </i>
                                    </a>
                                    {/* <!-- Github --> */}
                                    <a onClick={() => window.open("https://github.com/fazzyA", "_blank")} className="icons-sm ins-ic p-1">
                                        <i className="fa fa-github blue-text"> </i>
                                    </a>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="card card-body">
                                <div className="avatar mx-auto my-3">
                                    <img style={{ width: 170, height: 170 }} src="https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.0-9/28782659_1615813591849352_1927918376999933986_n.jpg?_nc_cat=105&ccb=2&_nc_sid=85a577&_nc_ohc=xGwA4Wp5uccAX-3A5jU&_nc_ht=scontent.fkhi17-1.fna&oh=f2ab5a078f7ce3ce1318e5dc62003a5c&oe=5FF66E8F" className="rounded-circle img-fluid" alt="Ali Mughal" />
                                </div>
                                <h5 className="font-weight-bold">
                                    <strong>Ali Mughal</strong>
                                </h5>
                                <p className="grey-text">Leader Of Mass It Training</p>

                                <ul className="list-unstyled">
                                    {/* <!-- Facebook --> */}
                                    <a onClick={() => window.open("https://www.facebook.com/zeeshanhanif", "_blank")} className="icons-sm fb-ic p-1">
                                        <i className="fa fa-facebook blue-text"> </i>
                                    </a>
                                    {/* <!-- Github --> */}
                                    <a onClick={() => window.open("https://github.com/zeeshanhanif", "_blank")} className="icons-sm ins-ic p-1">
                                        <i className="fa fa-github blue-text"> </i>
                                    </a>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="card card-body">
                                <div className="avatar mx-auto my-3">
                                    <img style={{ width: 170, height: 170 }} src="data:image/jpeg;base64,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" className="rounded-circle img-fluid" alt="Bill Gates" />
                                </div>
                                <h5 className="font-weight-bold">
                                    <strong>Bill Gates</strong>
                                </h5>
                                <p className="grey-text">American Business Magnate</p>

                                <ul className="list-unstyled">
                                    {/* <!-- Facebook --> */}
                                    <a onClick={() => window.open("https://www.facebook.com/BillGates/", "_blank")} className="icons-sm fb-ic p-1">
                                        <i className="fa fa-facebook blue-text"> </i>
                                    </a>
                                    {/* <!-- Instagram --> */}
                                    <a onClick={() => window.open("https://www.instagram.com/thisisbillgates/?hl=en", "_blank")} className="icons-sm ins-ic p-1">
                                        <i className="fa fa-instagram blue-text"> </i>
                                    </a>
                                    {/* <!-- Dribbble --> */}
                                    <a onClick={() => window.open("https://dribbble.com/shots/1998327-Bill-Gates", "_blank")} className="icons-sm ins-ic p-1">
                                        <i className="fa fa-dribbble blue-text"> </i>
                                    </a>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="card card-body">
                                <div className="avatar mx-auto my-3">
                                    <img style={{ width: 170, height: 170 }} src="data:image/jpeg;base64,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" className="rounded-circle img-fluid" alt="Dennis Ritchie" />
                                </div>
                                <h5 className="font-weight-bold">
                                    <strong>Dennis Ritchie</strong>
                                </h5>

                                <p className="grey-text">Father Of C Programing Language</p>
                                <ul className="list-unstyled">
                                    {/* <!-- Facebook --> */}
                                    <a onClick={() => window.open("https://en.wikipedia.org/wiki/Dennis_Ritchie", "_blank")} className="text-info icons-sm fb-ic p-1">
                                        <i className="fa fa-wikipedia-w" aria-hidden="true"></i>
                                    </a>
                                    {/* <!-- Github --> */}
                                    <a onClick={() => window.open("https://news.ycombinator.com/item?id=5748672", "_blank")} className="icons-sm ins-ic p-1">
                                        <i className="fa fa-github blue-text"> </i>
                                    </a>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- Grid column --> */}

                    </div>
                    {/* <!-- Grid row --> */}

                </section>
                {/* // <!--Section: Team v.1--> */}
            </div>

        )
    }
}

export default Teachers;