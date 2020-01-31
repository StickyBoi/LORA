import React, { Component } from "react";
import { Tabs, Avatar } from "antd";
import DecksTab from "./DecksTab";
import CardDeck from "../../assets/images/card-deck.svg";
import Graph from "../../assets/images/graphic.png";
import Background from "../../assets/images/background.png";

const { TabPane } = Tabs;
/**
 * HomeView
 *
 * @class HomeView
 * @extends {Component}
 */

class HomeView extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${Background})`,
          height: "1080px",
          backgroundPosition: "center 64px",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div
          style={{
            width: "1000px",
            margin: "0 auto",
            marginTop: "20px",
            padding: "10px 24px 10px 24px"
          }}
        >
          <Tabs
            animated={false}
            defaultActiveKey="1"
            size={"large"}
            className={"main-tabs"}
          >
            <TabPane
              tab={
                <span>
                  <Avatar src={CardDeck} size={16} shape={"square"} />
                  <span style={{ marginLeft: "5px" }}>Decks</span>
                </span>
              }
              key="1"
            >
              <DecksTab />
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Avatar src={Graph} size={16} shape={"square"} />
                  <span style={{ marginLeft: "5px" }}>Stats</span>
                </span>
              }
              key="2"
            >
              Stonks
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default HomeView;
