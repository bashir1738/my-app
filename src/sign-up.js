import './App.css';
import { IconName } from "react-icons/fa";

function signup() {
  return (
    <div className="background">
      <h1 className="header" >facebook</h1>
      <div className="form">
          <h4>Create a new account</h4>
          <div className="quick">it's quick and easy</div>
          <div className="line"></div>
          <div className="info">
            <input className="first" type="text" placeholder="First name" />
            <input className="last" type="text" placeholder="Surname" />  
            <input className="email" type= "email" placeholder="Mobile number or email address"/>
            <input className="password" type="password" placeholder="New password" />
            <div className="birth">Date of birth</div> <br/>
                  <select className="day" name="day">
                      <option value="01">1</option>
                      <option value="02">2</option>
                      <option value="03">3</option>
                      <option value="04">4</option>
                      <option value="05">5</option>
                      <option value="06">6</option>
                      <option value="07">7</option>
                      <option value="08">8</option>
                      <option value="09">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                  </select>
                <select name="month">
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select> 
                <select name="year">
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1995</option>
                    <option value="1994">1994</option>
                    <option value="1993">1993</option>
                    <option value="1992">1992</option>
                    <option value="1991">1991</option>
                    <option value="1990">1990</option>
                    <option value="1989">1989</option>
                    <option value="1988">1988</option>
                    <option value="1987">1987</option>
                    <option value="1986">1986</option>
                    <option value="1985">1985</option>
                    <option value="1984">1984</option>
                    <option value="1983">1983</option>
                    <option value="1982">1982</option>
                    <option value="1981">1981</option>
                    <option value="1980">1980</option>
                    <option value="1979">1979</option>
                    <option value="1978">1978</option>
                    <option value="1977">1977</option>
                    <option value="1976">1976</option>
                    <option value="1975">1975</option>
                    <option value="1974">1974</option>
                    <option value="1973">1973</option>
                    <option value="1972">1972</option>
                    <option value="1971">1971</option>
                    <option value="1970">1970</option>
                    <option value="1969">1969</option>
                    <option value="1968">1968</option>
                    <option value="1967">1967</option>
                    <option value="1966">1966</option>
                    <option value="1965">1965</option>
                    <option value="1964">1964</option>
                    <option value="1963">1963</option>
                    <option value="1962">1962</option>
                    <option value="1961">1961</option>
                    <option value="1960">1960</option>
                </select>           
                <div className="genders" >Gender</div>
                <div className="gender">
                  <div className="radio">
                      <label className="female" for="female" >Female</label>
                      <input className="circle" name="gender" type="radio"/>
                    </div>
                    <div className ="radio">
                      <label>Male</label>
                      <input className="circle" name="gender" type="radio"/>
                    </div>
                    <div className="radio">
                      <label>Custom</label>
                      <input className="circle" name="gender"  type="radio"/>  
                    </div>              
                </div>        
                <div className="more">
                People who use our service may have uploaded your contact information <br/> to Facebook. <a >learn mre.</a>  
                <p>
                By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.
                </p>
                </div> 
                <button className="sign-up" >Sign Up </button>     
                <h5><a>Already have an account? </a></h5>
          </div>
          
      </div>
      <div className="footer">
          <div className="footer-link1">
              <ul>
                <li><a>English (UK) </a></li>
                <li><a>Hausa </a></li>
                <li><a>Français (France)</a></li>
                <li><a>Português (Brasil) </a></li>
                <li><a>Español</a></li>
                <li><a>العربية</a></li>
                <li><a>Bahasa Indonesia </a></li>
                <li><a>Deutsch </a></li>
                <li><a>日本語 </a></li>
                <li><a>Italiano </a></li>
                <li><a>हिन्दी </a></li>         
                <button className="add">+</button>
              </ul>
          </div>
          <div className="footer-line">

          </div>
          <div className="footer-link2">
              <ul> 
                <li><a>Sign Up </a></li>
                <li><a>Log in </a></li>
                <li><a>Messenger </a></li>
                <li><a>Facebook Lite </a></li>
                <li><a>Video </a></li>
                <li><a>Places </a></li>
                <li><a>Game </a></li>
                <li><a>Markeplae </a></li>
                <li><a>Meta pay </a></li>
                <li><a>Meta quest </a></li>
                <li><a>Meta store </a></li>
                <li><a>Instagram </a></li>
                <li><a>Threads </a></li>
                <li><a>Fundraisers </a></li>
                <li><a>Services </a></li>
                <li><a>Visiting information center </a></li>
                <li><a>Privacy policy </a></li>
                <li><a>Privacy center </a></li>
                <li><a>Groups </a></li>
                <li><a>Create ads </a></li>
                <li><a>Create page </a></li>
                <li><a>Developers </a></li>
                <li><a>Careers </a></li>
                <li><a>cookies </a></li>
                <li><a>AdChoices </a></li>
                <li><a>Terms </a></li>
                <li><a>Help </a></li>
                <li><a>Contact uploading and non-users</a></li>
              </ul>
          </div>
      </div>
    </div>
  );
}

export default signup;
