import React, { Component } from "react";
import Asterisk from "../../assets/images/asterisk.png";
import { Avatar, Button, Dropdown, Icon, Menu } from "antd";
import Demacia from "../../assets/images/demacia-icon.png";
import Noxus from "../../assets/images/noxus-icon.png";
import Ionia from "../../assets/images/ionia-icon.png";
import PiltoverZaun from "../../assets/images/piltover-zaun-icon.png";
import Freljord from "../../assets/images/freljord-icon.png";
import ShadowIsles from "../../assets/images/shadow-isles-icon.png";

/**
 * RegionSelector
 *
 * @class RegionSelector
 * @extends {Component}
 */
class RegionSelector extends Component {
  state = {
    currentSelection: { logo: Asterisk, text: "All", size: 30 },
    regions: [
      {
        abbreviation: "AL",
        icon: Asterisk,
        size: 30,
        name: "All",
        nameRef: "all"
      },
      {
        abbreviation: "NX",
        icon: Noxus,
        size: 30,
        name: "Noxus",
        nameRef: "noxus"
      },
      {
        abbreviation: "DE",
        icon: Demacia,
        size: 30,
        name: "Demacia",
        nameRef: "demacia"
      },
      {
        abbreviation: "FR",
        icon: Freljord,
        size: 30,
        name: "Freljord",
        nameRef: "freljord"
      },
      {
        abbreviation: "SI",
        icon: ShadowIsles,
        size: 30,
        name: "Shadow Isles",
        nameRef: "shadow-isles"
      },
      {
        abbreviation: "IO",
        icon: Ionia,
        size: 30,
        name: "Ionia",
        nameRef: "ionia"
      },
      {
        abbreviation: "PZ",
        icon: PiltoverZaun,
        size: 30,
        name: "Piltover & Zaun",
        nameRef: "piltover-zaun"
      }
    ]
  };

  changeSelection(logo, text, size) {
    let state = this.state;
    state.currentSelection.logo = logo;
    state.currentSelection.text = text;
    state.currentSelection.size = size;
    this.setState(state);
  }

  renderDropdown() {
    return (
      <Menu>
        {this.state.regions.map((region, index) => (
          <Menu.Item
            key={index}
            onClick={() =>
              this.changeSelection(region.icon, region.name, region.size)
            }
          >
            <Avatar
              src={region.icon}
              style={{ marginLeft: "11px" }}
              size={region.size}
            />
            <span style={{ marginLeft: "10px" }}>{region.name}</span>
          </Menu.Item>
        ))}
      </Menu>
    );
  }

  render() {
    return (
      <Dropdown trigger={["click"]} overlay={() => this.renderDropdown()}>
        <Button style={{ width: "24%" }} size={"large"}>
          <Avatar
            src={this.state.currentSelection.logo}
            size={this.state.currentSelection.size}
          />
          <span style={{ marginLeft: "10px" }}>
            {this.state.currentSelection.text}
          </span>
          <Icon type="caret-down" />
        </Button>
      </Dropdown>
    );
  }
}

export default RegionSelector;
