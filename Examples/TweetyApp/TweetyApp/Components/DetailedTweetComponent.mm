//
//  DetailedTweetComponent.m
//  TweetyApp
//
//  Created by Valeriy Popov on 8/2/21.
//

#import "DetailedTweetComponent.h"
#import <ComponentTextKit/CKLabelComponent.h>

@interface DetailedTweetComponent()

@property (strong, nonatomic) TweetContext *context;

@end

@implementation DetailedTweetComponent

+ (instancetype)newWithContext:(TweetContext *)context {
  CKComponentScope scope(self);
  const auto font = [UIFont systemFontOfSize:12.0];
  return [super newWithComponent:[CKLabelComponent
           newWithLabelAttributes: {
             .string = context.title,
             .font = font,
           }
           viewAttributes: {}
           size: {}]];
}

@end
