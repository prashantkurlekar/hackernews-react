import { render } from '@testing-library/react';
import { Item } from '../core/models/Item';
import ItemComponent from './ItemComponent';

describe('ItemComponent', () => {
  test('should render without errors', () => {
    const mockItem: Item = {
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
    };

    const { container } = render(<ItemComponent item={mockItem} />);

    expect(container).toBeDefined();
  });
});
