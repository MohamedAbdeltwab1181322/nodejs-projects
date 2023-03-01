module.exports = (user, themeOptions) => {
    console.log(user);
    return `
    <!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

    <title>Resume</title>
    <style>
        .resume {
            width: 6.1in;
            height: 7.86in;
        }

        .box {
            background-color: ${themeOptions.wholeBodyColor};
            width: 100%;
            height: 100%;
        }

        .left-side {
            color:  ${themeOptions.textLeftColor};
            width: 33%;
            height: 100%;
            background-color: ${themeOptions.leftBodyColor};
        }

        .right-side {
            height: 100%;
            width: 65%;
            color: ${themeOptions.rightTextColor};
        }
        .name{
            font-size: 1.2rem;
        }

        .profile-image {
            width: 90%;
            margin-left: 5%;
            margin-top: 3%;
        }

        .profile-image img {
            border-radius: 50%;
        }

        .heading-text {
            font-size: 0.9rem;
        }

        .para,
        .per-info {
            font-size: 0.7rem !important;
        }

        .about .para {
            width: 93%;
        }

        .key-skill li {
            font-size: 0.7rem !important;
        }
    </style>
</head>

<body>
        <div class="resume border shadow d-flex align-items-center justify-content-center" id="resume">
            <div class="box">
                <div class="left-side d-inline-block">
                    <div class="profile-image">
                        <img src="https://pbs.twimg.com/media/ElkLaHCU4AIqplX?format=jpg" alt="" class="img-fluid">
                    </div>
                    <div class="contact ml-2 mt-2">
                        <div class="heading-text text-uppercase">Contact</div>
                        <p class="para mb-1">
                            House no: 102-2 Rayer Bazar <br>
                            Oposite High School, Dhaka <br>
                            ${user.phone} <br>
                            ${user.phone} <br>
                            ${user.email} <br>
                            https://md-shayon.netlify.com
                        </p>
                    </div>
                    <div class="expert ml-2 mt-2">
                        <div class="heading-text text-uppercase">Expertise Area</div>
                        <p class="para mb-1">
                        ${user.exp_1} <br>
                        ${user.exp_2} <br>
                        ${user.exp_3} <br>
                            Digital marketing <br>
                        </p>
                    </div>
                    <div class="sikll ml-2 mt-2">
                        <div class="heading-text text-uppercase">IT Skill</div>
                        <p class="para mb-1">
                        ${user.skill}
                        </p>
                    </div>

                    <div class="contact ml-2 mt-2">
                        <div class="heading-text text-uppercase">Hobbies</div>
                        <p class="para mb-1">
                            Cricket <br>
                            Football <br>
                            Watching Movies<br>
                            Travel <br>
                        </p>
                    </div>
                </div>
                <div class="right-side d-inline-block m-0 p-0 align-top">
                    <h2 class="name text-uppercase ml-3 my-3">${user.name}</h2>
                    <div class="about ml-3 mt-3">
                        <div class="heading-text text-uppercase">About Me</div>
                        <p class="para mb-1">
                        ${user.about}
                        </p>
                    </div>
                    <div class="personal ml-3 mt-3">
                        <div class="heading-text text-uppercase">PERSONAL INFORMATIONS</div>
                        <table class="per-info">
                            <tbody>
                                <tr class="border">
                                    <td>Father's Name:</td>
                                    <td>${user.f_name}</td>
                                </tr>
                                <tr class="border">
                                    <td>Mother's Name:</td>
                                    <td>${user.m_name} </td>
                                </tr>

                                <tr class="border">
                                    <td>Date of Birth :</td>
                                    <td>May 16, 1997</td>
                                </tr>
                                <tr class="border">
                                    <td> Permanent Address:</td>
                                    <td> Shohorbari, Singra, Natore 6450</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="edecation ml-3 mt-3">
                        <div class="heading-text text-uppercase">Educational Qualifications</div>
                        <table class="per-info">
                            <tbody>
                                <tr class="border">
                                    <td>2016-2019</td>
                                    <td>
                                        Bachelor of Business Administration <br>
                                        CGPA 3.00 <br>
                                        Major in Finance <br>
                                        Daffodil International University
                                    </td>
                                </tr>
                                <tr class="border">
                                    <td>2013-2015 </td>
                                    <td>
                                        Higher Secondary Certificate <br>
                                        GPA 3.33 <br>
                                        Business Studies <br>
                                        Singra Damdama Pilot School & Collage
                                    </td>
                                </tr>

                                <tr class="border">
                                    <td>2008-2013</td>
                                    <td>
                                        Secondary School Certificate <br>
                                        GPA 3.63
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="key-skill ml-3 mt-3">
                        <div class="heading-text text-uppercase">KEY SKILLS AND COMPETENCIES</div>
                        <ul class="pl-1">
                            <li>Understanding accounting & financial principles </li>
                            <li>Computer literate and highly proficient in MS Excel. </li>
                            <li>Strong analytical and problem-solving skills. </li>
                            <li>Excellent interpersonal, cross-cultural, </li>
                            <li>Encouraging and inspiring others to excel </li>
                            <li>Verbal and written communication skills. </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


    <!-- Option 2: jQuery, Popper.js, and Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"
        integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s"
        crossorigin="anonymous"></script>
    <script>
        // const wrapper = document.getElementById("wrapper");
        const resume = document.getElementById("resume");

        // console.log("Site Height: " + wrapper.clientHeight);
        // console.log("Site Width: " + wrapper.clientWidth);
        console.log("Resume Height: " + resume.clientHeight);
        console.log("Resume Width: " + resume.clientWidth);
    </script>

</body>

</html>
    `;
}