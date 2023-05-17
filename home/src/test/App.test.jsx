import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App.jsx';

describe('App tests', () => {
	it('should contains the loading', () => {
		render(<App loading={true} />);
		const heading = screen.getByText(/Loading.../i);
		expect(heading).toBeInTheDocument();
	});

	it('should contains the loaded', () => {
		render(<App loading={false} />);
		const heading = screen.getByText(/QianKun Home/i);
		expect(heading).toBeInTheDocument();
	});
});
