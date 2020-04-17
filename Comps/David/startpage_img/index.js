import React from 'react'
import '../startpage_img/startpage_img.css' 


const startpage_logo = require("../../../Imgs/primary_logo.svg") 
const StartPage = () => <div>
<div className = "startpage_img">
<img className = "startpage_img_container" src = {startpage_logo}></img>

  
</div>

</div>

export default StartPage;