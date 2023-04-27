document.addEventListener('load', () => {
    console.log(document.getElementById('firstname').value)
})

function resetSign(){

}

function generateSign(){
    let firstname = document.getElementById('firstname').value
    let lastname = document.getElementById('lastname').value
    return document.getElementById('signature').insertAdjacentHTML('beforeend', '<table style="font-size: 100%;font-family: Arial; width:50em; padding: 1em ;background-image: linear-gradient(to right bottom, #000000, #060606, #0c0c0c, #111111, #151515, #161617, #171818, #181919, #171818, #161717, #141515, #131414);">\n' +
        '    <tbody>\n' +
        '        <tr style="">\n' +
        '            <td style="border-right: #c6ab5b solid 2px;text-align: center; align-items:center ; padding-left: 2em; width: 40%">\n' +
        '                <div>\n' +
        '                    <span id="lastname" style="color: #c6ab5b; text-transform: uppercase">'+ firstname+ '</span>\n' +
        '                    <span id="firstname" style="color: #ffffff; text-transform: uppercase">nigond</span>\n' +
        '                </div>\n' +
        '                <p style="color: #ffffff; text-transform: uppercase; font-family: Arial">développeur web</p>\n' +
        '                <img style="width: 40%; display: compact" src="https://lh3.googleusercontent.com/d/1p9sLUdRzTLqVye1bmDBQl6MO1gIel-2-" id="logo-waybox" alt="waybox logo">\n' +
        '                <a href="https://www.linkedin.com/in/romain-nigond/" style="margin-left: 5%; display: block; margin-right:5% ;margin-top: 5%; color: #ffffff" id="personal-linkedin">\n' +
        '                    <img style="margin-right: 10px" src="https://lh3.googleusercontent.com/d/1aVlFDeLNOuFZ47kNFiXK3xTl17AoTOm0" alt="">\n' +
        '                    <span style="color: #ffffff; font-size: 100%;"> linkedin/romain-nigond </span>\n' +
        '                </a>\n' +
        '            </td>\n' +
        '            <td style=" padding-left: 1%;padding-right: 1%; text-align: center; width: 20%">\n' +
        '                    <img style="padding: 10%; width: 60%" src="https://lh3.googleusercontent.com/d/15PR4UflJPWxX00I3F7Nn3_zROQPrGddK" alt="">\n' +
        '            </td>\n' +
        '            <td style="border-left: #c6ab5b solid 2px; width: 40%">\n' +
        '                <table style="width: 80%;border-collapse: collapse; border-spacing: 0;font-size: 90%;font-family: Arial;margin-left: 20%">\n' +
        '                    <tbody>\n' +
        '                        <tr style="width: 100%">\n' +
        '                            <td style="background-color: #c6ab5b; padding: 2%; width: 15%; text-align: center">\n' +
        '                                <img style="width: 50%; display: block" src="https://lh3.googleusercontent.com/d/1JP5mC3_zZgFxvxJEagPXl3WeTcCLsSAJ" alt="">\n' +
        '                            </td>\n' +
        '                            <td style="margin-left: 10%">\n' +
        '                                <a style="color: #ffffff; margin-left: 10%" href="https://lh3.googleusercontent.com/d/1JP5mC3_zZgFxvxJEagPXl3WeTcCLsSAJ">waybox-officiel</a>\n' +
        '                            </td>\n' +
        '                        </tr>\n' +
        '                        <tr style="width: 100%">\n' +
        '                            <td style="background-color: #c6ab5b; padding: 2%; width: 15%; text-align: center">\n' +
        '                                <img style="width: 50%; display: block" src="https://lh3.googleusercontent.com/d/1o6c0x3GnV5iU_bmO_b3hFhmaTuyGn1qx" alt="">\n' +
        '                            </td>\n' +
        '                            <td style="margin-left: 10%">\n' +
        '                                <p style="color: #ffffff; margin-left: 10%; width: 100%">15 Allée du chargement, </br> 59650 Villeneuve d\'Ascq</p>\n' +
        '                            </td>\n' +
        '                        </tr>\n' +
        '                        <tr style="width: 100%;">\n' +
        '                            <td style="background-color: #c6ab5b; padding: 2%; width: 15%; text-align: center ">\n' +
        '                                <img style="width: 50%; display: block" src="https://lh3.googleusercontent.com/d/1_cP6l4hr3Kpuj0vatlmrj37K89xBRsxW" alt="">\n' +
        '                            </td>\n' +
        '                            <td style="margin-left: 10%">\n' +
        '                                <a style="color: #ffffff; margin-left: 10%" href="https://www.waybox.fr">waybox.fr</a>\n' +
        '                            </td>\n' +
        '                        </tr>\n' +
        '                        <tr style="width: 100%">\n' +
        '                            <td style="background-color: #c6ab5b; padding: 2%; width: 15%; text-align: center">\n' +
        '                                <img style="width: 50%; display: block" src="https://lh3.googleusercontent.com/d/1SK3HU3Jzq_JRyHe49ldsmbAfdnRW_3bd" alt="">\n' +
        '                            </td>\n' +
        '                            <td style="margin-left: 10%">\n' +
        '                                <p style="color: #ffffff; margin-left: 10%" >0.826.468.400</p>\n' +
        '                            </td>\n' +
        '                        </tr>\n' +
        '                    </tbody>\n' +
        '                </table>\n' +
        '            </td>\n' +
        '        </tr>\n' +
        '    </tbody>\n' +
        '</table>')
}