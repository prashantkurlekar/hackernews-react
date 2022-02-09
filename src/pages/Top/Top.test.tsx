import { act, fireEvent, render, screen } from '@testing-library/react';
import axios, { AxiosResponse } from 'axios';
import { Item } from '../../core/models/Item';
import Top from './Top';

const mockItems: Array<Item> = [
  {
    id: 30219984,
    title: 'PHP – The Right Way',
    points: 53,
    user: 'acqbu',
    time: 1644058982,
    time_ago: '2 days ago',
    comments_count: 38,
    type: 'link',
    url: 'https://phptherightway.com/',
    domain: 'phptherightway.com',
  },
  {
    id: 30203478,
    title: 'What Was the Ted Talk?',
    points: 94,
    user: 'bryanrasmussen',
    time: 1643955552,
    time_ago: '3 days ago',
    comments_count: 76,
    type: 'link',
    url: 'https://www.thedriftmag.com/what-was-the-ted-talk/',
    domain: 'thedriftmag.com',
  },
  {
    id: 30228327,
    title: "How Japan saved Tokyo's rail network from collapse (part 1, 1945-1982)",
    points: 104,
    user: 'jseliger',
    time: 1644110934,
    time_ago: 'a day ago',
    comments_count: 41,
    type: 'link',
    url: 'https://seungylee14.substack.com/p/how-japan-saved-tokyos-rail-network',
    domain: 'seungylee14.substack.com',
  },
];

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockedResponse: AxiosResponse = {
  data: mockItems,
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
};

describe('Top', () => {
  test('renders correctly', async () => {
    mockedAxios.get.mockResolvedValue(mockedResponse);

    const { container } = render(<Top />);

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => expect(container).toBeDefined());
  });

  test('should render items', async () => {
    mockedAxios.get.mockResolvedValue(mockedResponse);

    render(<Top />);

    const items = await screen.findAllByTitle('item');
    expect(items).toHaveLength(3);
  });

  test('should render pagination buttons', async () => {
    mockedAxios.get.mockResolvedValue(mockedResponse);

    render(<Top />);

    const buttons = await screen.findAllByRole('button');
    expect(buttons).toHaveLength(2);
  });

  test('should render next page', async () => {
    mockedAxios.get.mockResolvedValue(mockedResponse);

    render(<Top />);

    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);

    const items = await screen.findAllByTitle('item');
    expect(items).toHaveLength(3);
  });

  test('should disable Next button if current page is 10', async () => {
    mockedAxios.get.mockResolvedValue(mockedResponse);

    render(<Top />);

    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);

    await act(async () => {
      const disabledButton = await screen.findByText('Next', { selector: 'button[disabled]' });
      expect(disabledButton).toBeDefined();
    });
  });

  test('should render previous page', async () => {
    mockedAxios.get.mockResolvedValue(mockedResponse);

    render(<Top />);

    const nextButton = screen.getByText('Previous');
    fireEvent.click(nextButton);

    const items = await screen.findAllByTitle('item');
    expect(items).toHaveLength(3);
  });

  test('should disable Previous button if current page is 1', async () => {
    mockedAxios.get.mockResolvedValue(mockedResponse);

    render(<Top />);

    await act(async () => {
      const disabledButton = await screen.findByText('Previous', { selector: 'button[disabled]' });
      expect(disabledButton).toBeDefined();
    });
  });
});
