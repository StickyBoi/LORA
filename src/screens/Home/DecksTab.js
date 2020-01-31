import React, { Component } from "react";
import { Card, Row, Col } from "antd";
import RegionSelector from "./RegionSelector";
import DeckHolderTwo from "../../assets/images/deck-holder-two.png";
// import DeckHolderOne from "../../assets/images/deck-holder-one.png";
import Ionia from "../../assets/images/ionia-icon.png";
import Demacia from "../../assets/images/demacia-icon.png";
import Garen from "../../assets/images/garen.png";

const { Meta } = Card;

/**
 * DecksTab
 *
 * @class DecksTab
 * @extends {Component}
 */
class DecksTab extends Component {
  state = {
    decks: [
      {
        name: "Mon super deck",
        code: "23VL62",
        regions: ["Piltauver & Zaun", "Shadow Isles"],
        icons: [Ionia, Ionia],
        deckHolder: DeckHolderTwo
      },
      {
        name: "OTK Fiora",
        code: "23VL62",
        regions: ["Ionia", "Demacia"],
        icons: [Ionia, Ionia],
        deckHolder: DeckHolderTwo
      },
      {
        name: "Elusive shit",
        code: "23VL62",
        regions: ["Ionia", "Frejlord"],
        icons: [Ionia, Ionia],
        deckHolder: DeckHolderTwo
      },
      {
        name: "Elusive shit",
        code: "23VL62",
        regions: ["Ionia", "Demacia"],
        icons: [Ionia, Demacia],
        deckHolder: DeckHolderTwo
      },
      {
        name: "Elusive shit",
        code: "23VL62",
        regions: ["Ionia", "Frejlord"],
        icons: [Ionia, Ionia],
        deckHolder: DeckHolderTwo
      }
    ]
  };

  render() {
    return (
      <div>
        <h1>Your Decks</h1>
        <Card bordered={false} style={{ width: "100%" }}>
          <RegionSelector />
          <Row>
            {this.state.decks.map((deck, index) => (
              <Col key={index} span={6} style={{ padding: "20px 6px" }}>
                <Card
                  hoverable
                  style={{ width: 210, height: 380 }}
                  bodyStyle={{ textAlign: "center" }}
                  cover={
                    <div style={{ position: "relative" }}>
                      <img
                        style={{
                          position: "absolute",
                          width: 190,
                          height: 250,
                          objectFit: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          zIndex: 1,
                          top: 20,
                          left: 3
                        }}
                        alt={"garen"}
                        src={Garen}
                      />
                      <img
                        style={{
                          position: "absolute",
                          width: "inherit",
                          objectFit: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          zIndex: 2
                        }}
                        alt={deck.name}
                        src={deck.deckHolder}
                      />
                      <img
                        alt="icon"
                        src={Ionia}
                        style={{
                          position: "absolute",
                          width: 50,
                          height: 50,
                          top: 208,
                          left: 42,
                          zIndex: 3
                        }}
                      />
                      <img
                        alt="icon"
                        src={Demacia}
                        style={{
                          position: "absolute",
                          width: 50,
                          height: 50,
                          top: 208,
                          left: 118,
                          zIndex: 3
                        }}
                      />
                    </div>
                  }
                >
                  <Meta
                    style={{ marginTop: 280 }}
                    title={deck.name}
                    description={"".concat(deck.regions)}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </Card>
      </div>
    );
  }
}

export default DecksTab;
