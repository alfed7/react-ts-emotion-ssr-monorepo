import { render, cleanup } from '@testing-library/react';
import AppBar from './AppBar';
import { defaultTheme } from 'theme';
import { ThemeProvider } from '@emotion/react';

afterEach(cleanup);

test('should renders without crashing', () => {
  render(<ThemeProvider theme={defaultTheme}><AppBar>test</AppBar></ThemeProvider>);
});
