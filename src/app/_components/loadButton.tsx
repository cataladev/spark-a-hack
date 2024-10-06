import React, { Component } from 'react';

import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
    subsets: ["latin"],
    display: "swap",
  });

class ButtonLoader extends Component {
    state = {
      loading : false
    }
  
    fetchData = () => {
      this.setState({ loading : true });
  
      setTimeout(()=>{
        this.setState({loading : false});
      }, 2000)
    }
  
    render() {
      const {loading} = this.state;
  
      return (
          <div style={{ marginLeft: '60px', marginRight: '60px' }} className={notoSans.className}>
              <button className="button justify-center bg-[#f1d302] text-[#3C3744] p-4 rounded-full text-bold" onClick={this.fetchData} disabled={loading} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {loading && <i className="fa fa-refresh fa-spin" style={{ marginRight: '5px' }}></i>}
                  {loading && <span className={notoSans.className}><svg className="animate-spin h-5 w-5 mr-3 bg-[#000000]" viewBox="0 0 24 24"></svg>Thinking</span>}
                  {!loading && <span className={notoSans.className}>Generate</span>}
              </button>
          </div>


      );
    }
  }
  export default ButtonLoader;