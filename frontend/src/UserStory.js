import React, { Component } from 'react'


class UserStory extends Component {
      state = { active: 0 };
    
      componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    
      handleScroll = event => {
        const { pageYOffset } = window;
        const { active } = this.state;
    
        if (pageYOffset >= 500 && active === 0) {
          this.setState({ active: 1 });
        } else if (pageYOffset < 500 && active === 1) {
          this.setState({ active: 0 });
        }
      };
    
      render() {
        const { active } = this.state;
        return (
          <div style={{ height: 1000, width: 1800 }}>
            <div
              style={{
                height: "100%",
                width: "100%",
                backgroundColor: "#ffc09f",
                display: active === 0 ? "block" : "none"
              }}
            />
            <div
              style={{
                height: "100%",
                width: "100%",
                backgroundColor: "blue",
                display: active === 1 ? "block" : "none"
              }}
            />
          </div>
        );
      }

  }
  
export default UserStory
