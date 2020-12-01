document.addEventListener("DOMContentLoaded", ()=>{
document.querySelector("#navbar").innerHTML = 
`
    <nav>
    <input type="checkbox" id="check" />
    <label for="check" class="checkbtn"><i class="fal fa-bars"></i></label>
    <label class="logo"><a href="../index.html" style="color: #fff;">ConversionTools</a></label>
    <ul>
        <li><a href="../index.html">Home</a></li>
        <li><a href="../converters.html">Converters</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="feedback.html">FeedBack</a></li>
        <li><a href="suggestion.html">Suggestion</a></li>
        <li><a href="licenses.html">Licenses</a></li>
    </ul>
    </nav>
`
})
