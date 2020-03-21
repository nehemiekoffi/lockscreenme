import React, { useState, useEffect } from 'react';
import { Grid, Segment, Message, List, Form, TextArea, Button } from "semantic-ui-react";
import Core from "../providers/core";
import Devices from "../providers/devices";

const LockScreenApp = () => {
    const [fullName, SetFullName] = useState("Doe KOFFI");
    const [email, SetEmail] = useState("doe.koffi@domain.com");
    const [phone, SetPhone] = useState("05000000 / 06000000");
    const [website, SetWebsite] = useState("deo.koffi.domain.com");
    const [bio, SetBio] = useState("Song writer, Artist");
    const [device, SetDevice] = useState();
    const [color, SetColor] = useState(Core.defaultColor);
    const [picture, SetPicture] = useState();

    useEffect(() => {

    }, [])

    function getSelectedDeviceInfo(index){
        SetDevice(Devices[index]);
    }

    function save() {
        var width = device ? device.wiewport.split('x')[0] : Core.PreviewWidth;
        var height = device ? device.wiewport.split('x')[1] : Core.PreviewHeight;;
        Core.SavetoJpeg("LockScreenPreview", width, height)
    }

    function readLocalFile(event) {
        var selectedFile = event.target.files[0];
        var reader = new FileReader();
      
        reader.onload = function(event) {
          SetPicture(event.target.result);
        };
        reader.readAsDataURL(selectedFile);
    }

    return (
        <div className="AppContext">

            <Grid stackable>
                <Grid.Row>
                    <Grid.Column width={9}>

                        <Message
                            info
                            icon="info"
                            header='How is it helpful ?'
                            list={[
                            'It allow people to contact you if you lost your phone somewhere (in your office or an event room etc…)',
                            'It allow people to know what you do in life and you can get new business partners buy that',
                            "We don't store your personal informations"
                            ]}
                        />
                        <Segment raised>

                        <Form>
                            <h2>About you</h2>
                            
                            <Form.Group>
                                <Form.Input onChange={(e)=> SetFullName(e.target.value)} icon='user' iconPosition='left' placeholder='Your Name' width={16} />
                            </Form.Group>
                            <Form.Field
                            onChange={(e)=> SetBio(e.target.value)}
                            control={TextArea}
                            rows={2}
                            placeholder='What you do in life'
                            />
                            <Form.Group>
                                <Form.Input onChange={(e)=> SetEmail(e.target.value)} icon='mail' iconPosition='left' placeholder='Email' width={9} />
                                <Form.Input onChange={(e)=> SetPhone(e.target.value)} icon='phone' iconPosition='left' placeholder='Phone Number' width={7} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Input onChange={(e)=> SetWebsite(e.target.value)} icon='globe' iconPosition='left' placeholder='Website' width={10} />
                                
                                <div className="six wide field">
                                    <label>
                                        Choose a color :  <input onChange={(e)=> SetColor(e.target.value)} value={color} type='color'/>
                                    </label>
                                </div>

                            </Form.Group>
                            <Form.Group>
                                <Form.Input onChange={(e)=> readLocalFile(e)} type="file" label='Choose a picture' width={8} />

                                <div className="eight wide field">
                                    <label>Select your phone</label>
                                    <select onChange={(e)=> getSelectedDeviceInfo(e.target.value)} className="ui selection dropdown">
                                        <option value="">Select</option>
                                        {
                                            Devices.map( (d, index) => (
                                                <option key={index} value={index}>{d.name}</option>
                                            ))
                                        }
                                    </select>

                                </div>

                            </Form.Group>

                        </Form>

                        </Segment>

                        <Button content="Download" color='blue' size="huge" fluid icon="save" onClick={save} />

                    </Grid.Column>
                    <Grid.Column width={7}>

                        <div className="previewContext">

                            <div style={{ 
                                width: Core.PreviewWidth * Core.PreviewScreenRatio, 
                                height : Core.PreviewHeight * Core.PreviewScreenRatio, 
                                backgroundImage: picture ? `url(${picture})` : null 
                                }} id="LockScreenPreview">

                                <div id="previewIndicator" className="theme indicator">
                                    <p>Preview  {device && `for ${device.name}`}</p>
                                </div>

                                <div id="previewDateTime" className="theme datetime">
                                    <p className="time">10:00</p>
                                    <p className="date">Tuesday, 11 March 2020</p>
                                </div>

                                <div className="theme infos">
                                {
                                    (fullName !== "" || bio !== "") && 
                                    (
                                        <div className="section personalinfo" style={{ backgroundColor: color }} >
                                            <div className="name">
                                            {fullName} 
                                            </div>
                                            <div className="bio">
                                            {bio} 
                                            </div>
                                        </div>
                                    )
                                }
                                {
                                    (email !== "" || phone !== "" || website !== "") && (

                                        <div className="section contact">
                                            <List>

                                              { email !== "" && <List.Item icon='mail' content={email} /> } 

                                              { phone !== "" && <List.Item icon='phone' content={phone} /> } 

                                              { website !== "" && <List.Item icon='globe' content= {website} /> }
                                                
                                            </List>
                                        </div>
                                    )

                                }

                                </div>

                            </div>
                            

                        </div>

                        
                    </Grid.Column>
                </Grid.Row>
            </Grid>
                        
        </div>
    );
};

export default LockScreenApp;