import React from 'react';
import {Popover} from 'react-bootstrap';
import 'src/modules/app/header/explorer/ExplorePopover.scss';

const content = (
  <table className="explore-popover">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colSpan={2}>Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>

  </table>
);

export const ExplorePopover = (
  <Popover id='popover-basic'>
    <Popover.Header as='h3'>Popover right</Popover.Header>
    <Popover.Body>
      {content}
    </Popover.Body>
  </Popover>
);
