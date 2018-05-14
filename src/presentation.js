// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  // BlockQuote,
  // Cite,
  Deck,
  Heading,
  Image,
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
          <Heading size={3}>
            GraphQL API stitching with Apollo
          </Heading>
          <Text>
            Combine your APIs into one
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Text style={{fontWeight: 'bold'}}>
            Christoffer Niska
          </Text>
          <Text margin="20px 0">
            Head of Technology, <br/>
            Digital Services at Digia
          </Text>
          <Link href="https://github.com/crisu83/">github.com/crisu83</Link><br/>
          <Link href="https://twitter.com/crisu83/">twitter.com/crisu83</Link><br/>
          <Link href="https://about.me/crisu83/">about.me/crisu83</Link>
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
          <Heading size={3}>
            Problem
          </Heading>
          <Text>
            How to query multiple APIs from a single endpoint?
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Image src={require('./images/1-thread-type.png')} alt="" />
          <Image src={require('./images/2-user-type.png')} alt="" />
          <Image src={require('./images/3-thread-query.png')} alt="" />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Text>
            Schema stitching allow combining multiple GraphQL APIs into a single GraphQL API.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Text>
            Links are fields that combines two types from different schemas.
          </Text>
          <Image src={require('./images/4-extend-thread-type.png')} alt="" />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Text>
            Schema transforms is a new concept that solves many issues related to combining of schemas.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Text>
            Filter transform allow selecting the entry points for a schema, as well as removing certain types from the schema.
          </Text>
          <Image src={require('./images/5-filter-transform.png')} alt="" />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Text>
            Rename transforms allow renaming parts of a schema, which is especially useful for conflicts between type names.
          </Text>
          <Image src={require('./images/6-rename-transforms.png')} alt="" />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Text>
            You can also create your own custom transforms to customize the result of combining your schemas.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Text>
            Schema delegation allow keeping the original, untransformed schema around.
          </Text>
          <Image src={require('./images/7-schema-delegation.png')} alt="" />
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3}>
            Fin.
          </Heading>
          <Text>
            Questions?
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3}>
            Resources
          </Heading>
          <List>
            <ListItem><Link href="https://dev-blog.apollodata.com/graphql-schema-stitching-8af23354ac37" target="_blank">GraphQL schema stitching</Link></ListItem>
            <ListItem><Link href="https://dev-blog.apollodata.com/the-next-generation-of-schema-stitching-2716b3b259c0" target="_blank">The next generation of schema stitching</Link></ListItem>
            <ListItem><Link href="https://www.apollographql.com/docs/graphql-tools/schema-stitching.html" target="_blank">Schema stitching docs</Link></ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
