//
//  ViewController.h
//  gitexperts
//
//  Created by kandee on 16/12/14.
//  Copyright (c) 2014 Omnificence. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface ViewController : UIViewController<UIWebViewDelegate> {
    UIWebView *transcriptView;
}
@property (weak, nonatomic) IBOutlet UIButton *btnClose;
@property (weak, nonatomic) IBOutlet UIWebView *webView;
- (IBAction)onClose:(id)sender;


@end

