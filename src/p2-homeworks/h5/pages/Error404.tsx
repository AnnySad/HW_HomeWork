import React from 'react'

function Error404() {
    return (
        /* <div>
             {/!*<div>404</div>*!/}
             {/!*<div>Page not found!</div>*!/}
             {/!*<div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>*!/}*/


        <div className='wrapper'>
            <div className="mainbox">
                <div className="err">4</div>
                <i className="far fa-question-circle fa-spin"></i>
                <div className="err2">4</div>
                <div className="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in
                    the
                    first place?<p>Let's go <a href="#">home</a> and try from there.</p></div>
            </div>

        </div>
    )
}

export default Error404
