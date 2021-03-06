import React from 'react';
import {Link} from 'gatsby';

import Layout from '../../components/Layout';
import Container from '../../components/Container';

export default ({location}) => (
    <Layout location={location}>
        <Container isNarrow>
            <h1>v1 Docs</h1>
            <ul>
                <li>
                    <Link to="/docs/v1.html">v1</Link>
                </li>
                <li>
                    <Link to="/docs/v2.html">v2</Link>
                </li>
            </ul>
            <h2>End of support</h2>
            <p>
                After careful deliberation, we have decided to end support for
                PokéAPI version 1, effective 15 October 2018. If you still rely
                on version 1, it should be fairly simple to move your app to
                version 2 (
                <Link to="/docs/v2.html">view the documentation</Link>
                ).
            </p>
            <p>
                Although we value backwards compatibility, version 1 was
                deprecated in December 2014, and continuing to support it adds
                significant complexity to the project's aim to move to static
                hosting. Furthermore, we only receive around 1&nbsp;000 daily
                API hits for version 1, compared to 20&nbsp;000 hits for version
                2. Finally, unbeknownst to us, some parts of the version 1 API
                have been broken for a significant period of time, but we have
                received no complaints.
            </p>
            <p>
                After 15 October 2018, any requests for the version 1 API will
                receive a{' '}
                <a href="https://httpstatuses.com/301">301 Moved Permanently</a>{' '}
                response.
            </p>
            <p>
                You can view the discussion on removing support for version 1 in{' '}
                <a href="https://github.com/PokeAPI/ditto/issues/21">
                    this GitHub issue
                </a>
                .
            </p>
        </Container>
    </Layout>
);
