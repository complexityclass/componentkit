//
//  Tweet.h
//  TweetyApp
//
//  Created by Valeriy Popov on 8/2/21.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface Tweet : NSObject

@property (nonatomic, strong) NSString *title;
@property (nonatomic, strong) NSString *nickname;
@property (nonatomic, strong) NSDate *date;

@end

NS_ASSUME_NONNULL_END
