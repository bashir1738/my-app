// import React from 'react'
    const modal = ({isVisible, onclose}) => {
    if (!isVisible) return null
  
  return (
    <div className='fixed inset-0 overflow-y-hidden  bg-white bg-opacity-20 backdrop-blur-sm flex justify-center '>
        <div className='w-[420px] md:w-[430px]  '>
          <div className=' bg-white p-3 rounded-lg shadow-xl mt-3' >
            <div className='flex  justify-between'>
              <div>
              <h1 className='text-[32px] font-bold'>Sign Up</h1>
              <h2 className="text-gray-600" >It's quick and easy.</h2>
              </div>
              <button className='mt-[-30px] text-black font-medium text-[30px] fle' onClick={() => onclose()} > x </button>
            </div>
            <div className='pt-3 pb-3'><div className='bg-gray-200 h-0.5'></div></div>
            <form>
                <div className='flex flex-row'>
                  <input required type='text' placeholder='Firstname' className='p-2 w-full outline-gray-200'   />
                  <input required type='text' placeholder='Surname' className='p-2 w-full ml-3 outline-gray-200' />
                </div>
                <div className='pt-3'>
                  <input required className='p-2 w-full outline-gray-200' placeholder='Mobile Number or Email Address' type='Email ' />
                </div>
                <div className='pt-3'>
                  <input required className='p-2 w-full outline-gray-200'  placeholder='New password' type='password'/>
                </div>
                <div>
                <h3 className='text-gray-500 text-xs pt-3 mb-3'>Date of birth</h3>

                  <div className='flex flex-row'>
                    <div className='mr-3 border border-neutral-400 w-full h-9'>
                        <select className=" w-full h-full">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
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
                    </div >
                    <div className=' mr-3 border border-neutral-400 w-full h-9'>
                        <select className=" w-full h-full">
                          <option value="1">January</option>
                          <option value="2">Febuary</option>
                          <option value="3">March</option>
                          <option value="4">April</option>
                          <option value="5">May</option>
                          <option value="6">June</option>
                          <option value="7">July</option>
                          <option value="8">August</option>
                          <option value="9">September</option>
                          <option value="10">October</option>
                          <option value="11">November</option>
                          <option value="12">December</option>                          
                        </select>
                    </div >
                    <div className=' border border-neutral-400 w-full h-9'>
                        <select className=" w-full h-full">
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
                          <option value="1959">1959</option>
                        </select>
                    </div >
                  </div>
                </div>
                <div>
                  <h3 className='text-gray-500 text-xs pt-3 mb-2'>Gender</h3>
                  <div  className='flex flex-row  '>
                    <div className='mr-3  border border-neutral-400 w-full h-9'>
                      <div className="pt-1">
                        <label className="pl-2">Female</label>
                        <input type="radio" className="" name="gender"/>
                      </div>  
                    </div>
                    <div className='mr-3  border border-neutral-400 w-full h-9'>
                      <div className="pt-1">
                        <label className="pl-2">Male</label>
                          <input type="radio" className="ml-5" name="gender" />
                      </div>  
                    </div>
                    <div className=' border border-neutral-400 w-full h-9'>
                      <div className="pt-1">
                        <label className="pl-2">Custom</label>
                        <input type="radio" name="gender" />
                      </div>  
                    </div>
                  </div>
                </div>
                <div className='mt-1 text-gray-500 text-[11px] mt-2cd'>
                People who use our service may have uploaded your contact information to Facebook. <a className='text-blue-600'>Learn more.</a>
                </div>
                <div className='text-gray-500 text-[11px] mt-3'>
                By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.
                </div>
                <div className='flex items-center justify-center pt-4 pb-4'>
                  <button className='bg-green-600 hover:bg-green-700 p-2 font-bold  text-white hover:text-gray-100  rounded-lg text text-1xl w-[200px]  '>
                      Sign up 
                  </button>
                </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default modal