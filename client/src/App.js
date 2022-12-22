/** @jsxFrag React.Fragment */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Layout } from 'antd';
import { Row, Col } from 'antd';
const { Content } = Layout;

const GET_TEAMS = gql`
    {
        teams {
            id
            name
        }
    }
`;

const GET_TEAM_INFO = gql`
    query Team($id: ID!) {
        team(id: $id) {
            id
            name
            image
            description
            achievements
            arena
            arena_image
            players {
                image
                player_name
            }
        }
    }
`;

function Teams({ onTeamSelected }) {
    const { loading, error, data } = useQuery(GET_TEAMS);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <>
            <select
                name="team"
                onChange={onTeamSelected}
                css={{
                    fontSize: '1.1rem',
                    marginTop: '0.77rem',
                    padding: '5px',
                    color: '#000',
                    backgroundColor: '#dadfe1',
                    maxWidth: '100%',
                }}
            >
                {data.teams.map((team) => (
                    <option
                        css={{
                            background: '#fff',
                            color: '#000',
                        }}
                        key={team.id}
                        value={team.id}
                    >
                        {team.name}
                    </option>
                ))}
            </select>
        </>
    );
}

function GetTeamInfo({ id }) {
    const { loading, error, data } = useQuery(GET_TEAM_INFO, {
        variables: { id },
    });
    if (loading) return null;
    if (error) return `Error! ${error}`;

    return (
        <Layout
            css={{
                backgroundColor: '#ececec',
            }}
        >
            <Content>
                <Row
                    css={{
                        marginTop: '1.5rem',
                        marginBottom: '1.0rem',
                    }}
                    justify="center"
                >
                    <Col>
                        <h2
                            css={{
                                textDecoration: 'underline',
                            }}
                        >
                            {' '}
                            {data.team.name}{' '}
                        </h2>
                    </Col>
                </Row>
                <Row
                    css={{
                        marginTop: '1.5rem',
                        marginBottom: '1.0rem',
                    }}
                    justify="center"
                >
                    <Col>
                        <img
                            css={{
                                width: '100%',
                                maxWidth: '100%',
                                height: 'auto',
                            }}
                            src={data.team.image}
                            alt="joukkueen logo"
                        />
                    </Col>
                </Row>
                <Row justify="center">
                    <Col span={18}>
                        <p
                            css={{
                                maxWidth: '100%',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}
                        >
                            {' '}
                            {data.team.description}{' '}
                        </p>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col>
                        <h2
                            css={{
                                textDecoration: 'underline',
                            }}
                        >
                            Saavutukset
                        </h2>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col span={18}>
                        <p
                            css={{
                                maxWidth: '100%',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}
                        >
                            {' '}
                            {data.team.achievements}{' '}
                        </p>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col>
                        <h2
                            css={{
                                textDecoration: 'underline',
                                marginBottom: '2rem',
                            }}
                        >
                            Pelaajat
                        </h2>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col span={20}>
                        <div
                            css={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                width: '100%',
                            }}
                        >
                            {data.team.players.map((player) => (
                                <div
                                    css={{
                                        flexDirection: 'column',
                                        justifyContent: 'flex-end',
                                        display: 'flex',
                                        width: '220px',
                                        margin: '0px 15px 20px',
                                        border: '2px solid #000',
                                        backgroundColor: '#ffcb05',
                                    }}
                                    key={player.id}
                                >
                                    <div
                                        css={{
                                            flexBasis: '80%',
                                        }}
                                    >
                                        <img
                                            css={{
                                                width: '100%',
                                                maxWidth: '100%',
                                                height: 'auto',
                                            }}
                                            src={player.image}
                                            key={player.id}
                                            alt="pelaajan kuva"
                                        />
                                    </div>
                                    <div
                                        css={{
                                            textAlign: 'center',
                                            padding: '0.5rem 0',
                                            width: '100%',
                                        }}
                                    >
                                        <p> {player.player_name} </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
                <Row
                    justify="center"
                    css={{
                        paddingBottom: '1rem',
                    }}
                >
                    <Col>
                        <h2
                            css={{
                                textDecoration: 'underline',
                            }}
                        >
                            {data.team.arena}
                        </h2>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col>
                        <img
                            css={{
                                marginBottom: '2.2rem',
                                border: '1px solid #000'
                            }}
                            src={data.team.arena_image}
                            alt="joukkueen areena"
                        />
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
}

function App() {
    const [selectedTeam, setSelectedTeam] = useState('1');

    function onTeamSelected({ target }) {
        setSelectedTeam(target.value);
    }

    return (
        <>
            <Layout
                css={{
                    minHeight: '60vh',
                    paddingTop: '1.5rem',
                    backgroundColor: '#ececec',
                }}
            >
                <Content>
                    <Row
                        justify="center"
                        css={{
                            paddingBottom: '1rem',
                        }}
                    >
                        <Col>
                            <Teams onTeamSelected={onTeamSelected} />
                        </Col>
                    </Row>
                    <Row justify="center">
                        <Col>
                            {selectedTeam && <GetTeamInfo id={selectedTeam} />}
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </>
    );
}

export default App;
