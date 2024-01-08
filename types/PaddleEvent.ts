import { EventId, NotificationId } from './Paddle'
import { PaddleProduct } from './PaddleProduct'
import { PaddlePrice } from './PaddlePrice'
import { PaddleTransaction } from './PaddleTransaction'
import { PaddleSubscription } from './PaddleSubscription'

export interface PaddleEvent {
  event_id: EventId
  event_type: string
  occurred_at: string
  notification_id: NotificationId
  data: PaddleProduct | PaddlePrice | PaddleTransaction | PaddleSubscription
}
