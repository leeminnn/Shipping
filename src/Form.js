import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, Button, Checkbox, Radio, Row, Col, Steps, Modal } from 'antd';
import './CSS/Form.css';

function Demo() {
  const { Step } = Steps;
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [school, setSchool] = useState(['NUS']);
  const [gender, setGender] = useState('male');
  const [preferred_gender, setPreferredGender] = useState(['male']);
  const [data, setData] = useState({});

  if (window.innerWidth <=640) {
    var first = 'vertical';
  }
  else {
    var first = 'horizontal';
  }

  const [direction, setDirection] = useState(first);

  const updateMedia = () => {
    if (window.innerWidth <=640){
      setDirection("vertical")
    }
    else if (window.innerWidth >640) {
      setDirection("horizontal")
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const handleChange = count => {
    console.log('onChange:', count);
    setCount({ count });
  };

  function onChangeText(e) {
    console.log(`text:${e.target.value}`);
    setCount(1)
    setName(e.target.value)
  }

  function onChangeChecked(checkedValues) {
    console.log('checked = ', checkedValues);
    setCount(2)
    setSchool(checkedValues)
  };

  function onChangeRadio(e) {
    console.log(`radio checked:${e.target.value}`);
    setCount(3)
    setGender(e.target.value)
  }

  function onChangeChecked2(checkedValues) {
    console.log('checked = ', checkedValues);
    setCount(4)
    setPreferredGender(checkedValues)
  };

  function updateField() {
    if ( school.length == 0 || name == "" || preferred_gender.length == 0){
      Modal.error({
        content: 'Please complete the missing fields before resubmission.',
      });
    }
    else {
      const fdata = {name, school, gender, preferred_gender}
      setData(fdata);
      Modal.success({
        content: 'You have successfully submitted the form',
        onOk() {
          window.location.reload()
        },
      });
    }
  }

  console.log(direction)

  return (
    <div className="form" id='form'>
        <h1><b>Boarding the ship</b></h1>
        <p>We will always be shipping people who are interested in looking for real connections. Being honest allows you to build connections. We suggest that you share your real preferences.</p>
          
        <br />

        <Steps current={count} onChange={handleChange} direction={direction}>
          <Step title="Verify Name"/>
          <Step title="School" />
          <Step title="Gender" />
          <Step title="Preferred Gender" />
        </Steps>

        <br/>
        <br/>

        <Form>
          <h2>What is your name?</h2>
          <h5>Names will not be revealed until both parties match each other.</h5>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your name' }]}
            onChange={onChangeText}
          >
            <Input />
          </Form.Item>

          <br/>
          <h2>I want to meet people from</h2>

          <Checkbox.Group style={{ width: '100%' }} defaultValue="NUS" onChange={onChangeChecked} rules={[{ required: true, message: 'Please input your name' }]}>
            <Row>
              <Col span={8}>
                <Checkbox value="NUS"><img src="https://s3.amazonaws.com/unroll-images-production/projects%2F9735%2F1624612900012-NUS.png" className='schIcons'/></Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="SMU"><img src="https://s3.amazonaws.com/unroll-images-production/projects%2F9735%2F1624613448177-SMU.png" className='schIcons'/></Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="NTU"><img src="https://s3.amazonaws.com/unroll-images-production/projects%2F9735%2F1624613356935-NTU.png" className='schIcons'/></Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
          <br/>
          <br/>
          <br/>

          <h2>The gender I identify with is</h2>
          <Radio.Group size="large" onChange={onChangeRadio} defaultValue="male" style={{width: '100%', textAlign: 'center'}}>
          <Row>
              <Col span={8}>
                <Radio.Button value="male" style={{width: '100%'}}>Male</Radio.Button>
              </Col>
              <Col span={8}>
                <Radio.Button value="female" style={{width: '100%'}}>Female</Radio.Button>
              </Col>
              <Col span={8}>
                <Radio.Button value="other" style={{width: '100%'}}>Other</Radio.Button>
              </Col>
            </Row>
          </Radio.Group>
          <br/>
          <br/>
          <br/>

          <h2>I prefer the other party's gender to be</h2>
          <h5>**Your options will not be revealed to public</h5>

          <Checkbox.Group style={{ width: '100%'}} defaultValue="male" onChange={onChangeChecked2}>
            <Row>
              <Col span={8}>
                <Checkbox value="male" style={{fontSize: '15px'}}>Male</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="female" style={{fontSize: '15px'}}>Female</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="others" style={{fontSize: '15px'}}>Others</Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>

          <br/>
          <br/>
          <br/>
          <Form.Item>
            <Button type="primary" shape="round" size='large' htmlType="submit" style={{ background: "#c85366", border: "none"}} onClick={updateField}>
              Submit
            </Button>
          </Form.Item>

        </Form>
    
    </div>
  );
}

export default Demo