import { Item } from '../core/models/Item';

type Props = { item: Item };

const ItemComponent: React.FC<Props> = ({ item }) => (
  <div className="item-wrapper">
    <div title="item" className="item">
      <div>
        <a href={item.url}>
          <span className="title">{item.title}</span>
        </a>
        {item.domain && <small className="domain">({item.domain})</small>}
      </div>
      <div className="item-extras">
        <small>
          {item.points || 0} points by {item.user}
        </small>
        <small>{item.time_ago}</small>
        {<small>{item.comments_count > 0 ? item.comments_count : 'No'} comments</small>}
      </div>
    </div>
  </div>
);

export default ItemComponent;
