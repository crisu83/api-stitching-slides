// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Code,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
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
    secondary: '#222',
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
        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={3} textColor="primary" style={{margin: '0 20px'}}>
            GraphQL API stitching with Apollo
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={3} textColor="primary">
            Hi, I'm Christoffer
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Text textColor="primary">
            GraphQL is an API query language.<br/>
            Apollo is a GraphQL client.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Text textColor="primary" style={{margin: '0 80px'}}>
            How to combine multiple GraphQL APIs to form a single API?
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Layout>
            <Fill>
              <Image src={require('./images/1-thread-type.png')} />
            </Fill>
            <Fill>
            <Image src={require('./images/2-user-type.png')} />
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Image src={require('./images/3-thread-query.png')} />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={3} textColor="primary">
            Schema stitching
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Text textColor="primary">
            Links are fields that combines two types from different schemas.
          </Text>
          <Image src={require('./images/4-extend-thread-type.png')} alt="" />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Text textColor="primary">
            <Code textColor="primary" textSize={60}>
              graphql-tools@3
            </Code>
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Text textColor="primary" style={{margin: '0 80px'}}>
            <b>Schema transforms</b> is a new concept that solves many issues related to merging schemas.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Text textColor="primary" style={{margin: '0 80px'}}>
            <b>Filter transform</b> allow selecting the entry points for a schema, as well as removing certain types from the schema.
          </Text>
          <Image src={require('./images/5-filter-transform.png')} alt="" />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Text textColor="primary" style={{margin: '0 80px'}}>
            <b>Rename transforms</b> allow renaming parts of a schema, which is especially useful for resolving conflicts between type names.
          </Text>
          <Image src={require('./images/6-rename-transforms.png')} alt="" />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Text textColor="primary" style={{margin: '0 80px'}}>
            You can also create your own custom transforms to customize the result of combining your schemas.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Text textColor="primary">
            <b>Schema delegation</b> allow keeping the original, untransformed schema around.
          </Text>
          <Image src={require('./images/7-schema-delegation.png')} alt="" />
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={3} textColor="primary" style={{margin: '0 0 40px'}}>
            Thank you!
          </Heading>
          <Text>
            <Link href="https://twitter.com/crisu83/" textColor="primary">@Crisu83</Link>
          </Text>
        </Slide>
      </Deck>
    );
  }
}
