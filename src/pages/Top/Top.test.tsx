import { act, render, screen } from '@testing-library/react';
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
    await act(async () => {
      expect(container).toBeDefined();
    });
  });

  test('should render items', async () => {
    mockedAxios.get.mockResolvedValue(mockedResponse);

    render(<Top />);

    const items = await screen.findAllByTitle('item');
    expect(items).toHaveLength(3);
  });
});
