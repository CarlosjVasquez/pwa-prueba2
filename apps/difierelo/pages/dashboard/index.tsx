import LayoutInformation from '../../components/Layout-Information';
import React from 'react';
import Dashboard from './Dashboard';

export default function index() {
  return (
    <LayoutInformation>
      <Dashboard />
    </LayoutInformation>
  );
}
