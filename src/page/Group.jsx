import React from "react";
import {Row, Col, Card, CardHeader, CardBody, CardFooter, InputGroup, Input, Button, Table} from "reactstrap";
import Header from "../component/Header";
import CardMember from "../component/CardMember";
import "./Gorup.scss";
import {inject, observer} from "mobx-react";
import bin from "../assets/bin.png";
import pen from "../assets/pencil.png";

@inject('AppStore')
@observer
class Group extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.sampleStore = this.props.AppStore.sampleStore;
        this.state = {
            group:'',
            name:'',
            email:'',
        };
    }
    componentDidMount() {
        this.sampleStore.getUsers();
    }
    remove(val){
        if (confirm("Are you sure want to delete item ?")){
            this.sampleStore.member.splice(this.sampleStore.member.indexOf(val),1)
        }
    }

    generateTable() {
        return (
            <div>
                <p>selected member group</p>
                <Table style={{color: '#fff'}}>
                    <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Skils and Qualification</th>
                        <th>Certification</th>
                        <th>Process</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.sampleStore.member.map((value,index)=>{
                            return(
                                <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{value.name}</td>
                                    <td>{value.skill}</td>
                                    <td>{value.certification}</td>
                                    <td><img width={'20px'} src={pen} alt=""/> <img width={'20px'} onClick={() => this.remove(value)} src={bin} alt=""/></td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </Table>
            </div>
        )
    }

    onSearch(){
        this.sampleStore.usersFilter = this.sampleStore.users.filter((value => ((value.email.includes(this.state.email) && this.state.email.length > 0) || (value.name.includes(this.state.name) && this.state.name.length > 0))));
    }

    generateBody() {
        return (
            <div>
                <Row>
                    <Col xs="5">
                        <Col xs="12">
                            <p>Group Name</p>
                            <InputGroup>
                                <Input onChange={(e)=> this.setState({group: e.target.value})}/>
                            </InputGroup>
                        </Col>
                        <Col xs="12">
                            <p>Search People</p>
                            <InputGroup>
                                <Input onChange={(e)=> this.setState({name: e.target.value})} placeholder="search by user name"/>
                            </InputGroup>
                            <br/>
                            <InputGroup>
                                <Input onChange={(e)=> this.setState({email: e.target.value})} placeholder="search by email"/>
                            </InputGroup>
                            <br/>
                            <Button onClick={()=> this.onSearch()} color="primary" className="button-search">Search People</Button>
                            <br/>
                            <br/>
                            <p>{this.sampleStore.usersFilter.length > 0 ? "People found" : "People Not Found"}</p>
                        </Col>
                        <Col xs="12">
                            {this.sampleStore.usersFilter.map(value => {
                                return(
                                    <CardMember onButtonClick={()=> {
                                        this.sampleStore.member.push(value);
                                    }} name={value.name} skills={value.skills} certification={value.certification} />
                                )
                            })}
                        </Col>

                    </Col>
                    <Col xs="7">
                        {this.generateTable()}
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col xs="12" style={{textAlign: 'right'}}>
                        <div style={{height: '1px', width: '100%', backgroundColor: '#fff'}}></div>
                        <br/>
                        <Button color="primary" onClick={() => this.sampleStore.insertGroup(this.state.group)}>Submit</Button>
                    </Col>
                </Row>
            </div>
        )
    }

    render() {
        return (
            <div style={{width: '100%', overflowX: 'hidden'}}>
                <Row>
                    <Col xs="12">
                        <Header/>
                    </Col>
                </Row>
                <Row className="group-page">
                    <Col xs="12">
                        <Card>
                            <CardHeader>
                                Create Group
                            </CardHeader>
                            <CardBody>
                                {this.generateBody()}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Group;
