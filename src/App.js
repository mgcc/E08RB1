import React, { Component } from 'react';

import styles from './styles/main.css';

// We'll give them this object
const pageData = {
  name: "Mon",
  sidebarLinks: [
    { name: "Home", url: "https://www.google.com.ph/?gfe_rd=cr&dcr=0&ei=UgzOWYy8KaT48AfyiLeQBA", id: 1 },
    { name: "About", url: "https://www.google.com.ph/?gfe_rd=cr&dcr=0&ei=UgzOWYy8KaT48AfyiLeQBA", id: 2 },
    { name: "Friends", url: "https://www.google.com.ph/?gfe_rd=cr&dcr=0&ei=UgzOWYy8KaT48AfyiLeQBA", id: 3 },
    { name: "Games", url: "https://www.google.com.ph/?gfe_rd=cr&dcr=0&ei=UgzOWYy8KaT48AfyiLeQBA", id: 4 },
    { name: "Apps", url: "https://www.google.com.ph/?gfe_rd=cr&dcr=0&ei=UgzOWYy8KaT48AfyiLeQBA", id: 5 }
  ],
  mainContent: [
    { title: "Post 1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada eros a diam elementum, ut congue risus blandit. Aenean non lacus at arcu rutrum tempor. Donec tincidunt quis augue eu lacinia. Phasellus sodales pellentesque libero. Suspendisse sed volutpat turpis. Quisque vel augue ac quam imperdiet interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus ac nisi ut dui ornare pulvinar. Fusce molestie lectus sed odio pretium consectetur. Duis metus felis, consequat a laoreet in, consequat vitae nulla. Donec tellus eros, ullamcorper et lacinia eu, malesuada a arcu.", id: 1 },
    { title: "Post 2", text: "Duis eget arcu sed velit pulvinar fringilla. Cras ac porta nunc. Proin vitae turpis vehicula lorem faucibus hendrerit. Phasellus non est tincidunt, tincidunt nisi quis, convallis ante. Suspendisse et mi sagittis, tincidunt eros ut, auctor velit. Morbi vitae rutrum justo. Etiam at eros condimentum, blandit urna a, finibus nisl. Nunc lacus turpis, egestas eget condimentum quis, condimentum interdum nisi. Vestibulum lacinia nec diam nec lobortis. Morbi tristique quis dolor in aliquet. In tristique commodo nunc a aliquet. Aenean in sagittis risus. Fusce rutrum dolor tortor, hendrerit rutrum mi iaculis in. Nullam eget felis orci. Quisque nibh massa, rutrum eget commodo a, laoreet ut leo.", id: 2 },
    { title: "Post 3", text: "Morbi velit odio, sodales id luctus sed, lacinia in purus. Pellentesque tortor metus, ultricies et magna eget, ultricies faucibus justo. Quisque quis venenatis dolor. Nulla vehicula tempor nibh a condimentum. Nunc porttitor pharetra nisi, sed pretium erat varius id. Aliquam erat volutpat. Cras et metus commodo, eleifend purus rutrum, vestibulum mi. Cras consequat dignissim posuere. In in lectus nec massa scelerisque laoreet. Donec mi lacus, eleifend dictum nulla a, congue pulvinar ex. Aenean venenatis, velit ornare tempor suscipit, tellus erat ullamcorper velit, eleifend semper ipsum leo et odio. Nunc rutrum, eros et mattis interdum, ante purus varius odio, at consectetur ligula mi cursus ipsum. Sed id volutpat enim, et feugiat dolor. Curabitur metus libero, tincidunt eget tellus nec, mollis hendrerit sem. Nam viverra dolor a vehicula posuere. Donec quis tortor et odio lacinia tempor.", id: 3 },
    { title: "Post 4", text: "Phasellus eu risus blandit velit vestibulum ullamcorper. Aenean libero neque, rhoncus non pretium ut, rhoncus sit amet augue. Nunc scelerisque velit eget nibh gravida, ac condimentum urna maximus. Quisque venenatis blandit facilisis. Integer quis ante purus. Fusce imperdiet dolor ac quam eleifend ultrices. Nam dapibus augue eget nibh sodales, at tristique augue lacinia. Nunc a nunc vel augue euismod maximus. Sed semper tempor magna quis aliquet.", id: 4 },
  ],
  ads: [
    { name: "Annoying Advert 1", url: "", id: 1 },
    { name: "Annoying Advert 2", url: "", id: 2 },
    { name: "Annoying Advert 3", url: "", id: 3 },
    { name: "Annoying Advert 4", url: "", id: 4 },
    { name: "Annoying Advert 5", url: "", id: 6 },
  ]
}

class App extends Component {

    render() {
      const { name, sidebarLinks, mainContent, ads } = pageData;

      return (
        <div>
          <Header
            name={name} />
          <Sidebar
            links={sidebarLinks} />
          <Main
            content={mainContent} />
          <Aside
            ads={ads} />
        </div>
      );
    }
}

class Header extends Component {

  render() {
    return (
      <div className="header">
        <h3>{ this.props.name }</h3>
      </div>
    );
  }
}

class Sidebar extends Component {

  render() {
    return (
      <div className="sidebar">
        { this.props.links.map(link =>
            <SidebarLink
              link={link} />
          )
        }
      </div>
    );
  }
}

class SidebarLink extends Component {

  render() {
    const { name, url } = this.props.link;

    return (
      <li className="sidebar-link">
        <a href={url}>{name}</a>
      </li>
    );
  }
}

class Main extends Component {

  render() {
    const mainContent = this.props.content;

    return (
      <div className="main-content">
          { mainContent.map(content =>
              <div className="content" key={content.id}>
                <h4>{content.title}</h4>
                <p>{content.text}</p>
              </div>
          ) }
      </div>
    );
  }
}

class Aside extends Component {

  render() {
    return (
      <div className="ads">
        { this.props.ads.map( ad =>
            <div>
              <a href={ad.url}>{ad.name}</a>
            </div>
        )}
      </div>
    );
  }
}
export default App;
