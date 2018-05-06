// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  // BlockQuote,
  Cite,
  Deck,
  Heading,
  Link,
  ListItem,
  List,
  // Quote,
  Slide,
  Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#FFF',
    secondary: '#001F3F',
    tertiary: '#F012BE',
    quartenary: '#DDD',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} caps lineHeight={1.5} textColor="secondary">
            GraphQL API stitching with Apollo
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={5} bold>
            Combine your APIs into one
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={4} textColor="tertiary">
            Christoffer Niska
          </Heading>
          <Text margin="10px 0 0">
            Head of Technology, <br/>
            Digital Services at Digia
          </Text>
          <List>
            <ListItem>GitHub: <Link href="https://github.com/crisu83/">crisu83</Link></ListItem>
            <ListItem>Twitter: <Link href="https://twitter.com/crisu83/">crisu83</Link></ListItem>
            <ListItem>Website: <Link href="https://about.me/crisu83/">about.me/crisu83</Link></ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Text>
            GraphQL is an API query language
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Text>
            Apollo is a GraphQL client
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Text>
            Schema stitching is the process of creating a single GraphQL schema from multiple underlying GraphQL APIs.
          </Text>
          <Cite>
            Apollo documentation
          </Cite>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={4} textColor="tertiary">
            Links
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={4} textColor="tertiary">
            Schema transforms
          </Heading>
          <List>
            <ListItem>Filtering</ListItem>
            <ListItem>Renaming</ListItem>
            <ListItem>Custom</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={4} caps textColor="tertiary">
            Resources
          </Heading>
          <List>
            <ListItem><Link href="https://dev-blog.apollodata.com/the-next-generation-of-schema-stitching-2716b3b259c0" target="_blank">The next generation of schema stitching</Link></ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
