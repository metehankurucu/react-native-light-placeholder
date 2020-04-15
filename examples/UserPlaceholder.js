import React from 'react';
import { 
    Placeholder,
    Row, 
    Circle, 
    Col, 
    Rectangle 
} from 'react-native-light-placeholder';

const UserPlaceholder = props => {
    return (
        <Placeholder {...props}>
            <Row style={{margin:10}}>
                <Circle />
                <Col>
                    <Rectangle width={100} />
                    <Rectangle />
                </Col>
            </Row>
        </Placeholder>
    )
}

export default UserPlaceholder;