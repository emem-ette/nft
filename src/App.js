import './App.css';

function App() {


    const paragraph = 'Our Equilibrium collection promotes balance and calm';
    const eth = '0.041ETH'
    const days = '3 days left'


    return (
      <div className="App">
        <div className='container'>
           <div className='content-container'>
  
            <div className='flex-container'>
              <div className='box-1'>
                <img src='./imgs/image-equilibrium.jpg' alt='bigEquilibrium' style={{
                  width: 300,
                  height: 300, objectFit: 'contain', borderRadius: 20
                }} />
              </div>
  
              <div className='box-2'>
                <div className='box-2-content-container'>
                  <h1>equilibrium #3429</h1>
                  <p>{paragraph}</p>
                  <div className='flex-container-2'>
                    <div className='lil-box-1'>
                      <div className='icon'>
                        <img src='./imgs/icon-ethereum.svg' alt='iconEth' className='icon' />
                      </div>
                      <div className='eth'>
                        <p>{eth}</p>
                      </div>
                    </div>
                    <div className='lil-box-2'>
                      <div className='icon'>
                        <img src='./imgs/icon-clock.svg' alt='iconClock' className='icon' />
                      </div>
                      <div className='days'>
                        <p>{days}</p>
                      </div>
                    </div>
  
                  </div>
                  <div className='hr-line'>
                    <hr className='line' />
                  </div>
                  <div className='flex-container-3'>
                    <div className='lil-box-3'>
                      <img src='./imgs/image-avatar.png' alt='userImg' style={{ width: 50 }} className='avatarImg' />
                    </div>
                    <div className='lil-box-4'>
                      <h3><span className='diffColor'>Creation of</span> Jules Wyvern</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
  
          </div>
        </div>
      </div>
  );
}

export default App;
