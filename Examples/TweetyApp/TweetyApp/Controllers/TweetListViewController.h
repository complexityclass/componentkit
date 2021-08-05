//
//  TweetListViewController.h
//  TweetyApp
//
//  Created by Valeriy Popov on 8/2/21.
//

#import <UIKit/UIKit.h>
#import "TweetContext.h"
#import <ComponentKit/CKComponent.h>

NS_ASSUME_NONNULL_BEGIN

typedef CKComponent *_Nonnull(*TweetComponentProvider)(TweetContext *_Nonnull);

@interface TweetListViewController : UIViewController

- (instancetype)initWithProvider:(TweetComponentProvider)provider NS_DESIGNATED_INITIALIZER;

@end

NS_ASSUME_NONNULL_END
