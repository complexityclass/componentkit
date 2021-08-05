//
//  DetailedTweetComponent.h
//  TweetyApp
//
//  Created by Valeriy Popov on 8/2/21.
//

#import <Foundation/Foundation.h>
#import "TweetContext.h"
#import <ComponentKit/CKCompositeComponent.h>

NS_ASSUME_NONNULL_BEGIN

@interface DetailedTweetComponent : CKCompositeComponent

+ (instancetype)newWithContext:(TweetContext*)context;

@end

NS_ASSUME_NONNULL_END
