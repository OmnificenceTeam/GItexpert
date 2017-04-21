//
//  ViewController.m
//  gitexperts
//
//  Created by kandee on 16/12/14.
//  Copyright (c) 2014 Omnificence. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

@synthesize webView;
@synthesize btnClose;


- (BOOL) prefersStatusBarHidden
{
    return YES;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    
    webView.scrollView.bounces = NO;
    webView.delegate = self;
    [webView loadRequest:[NSURLRequest requestWithURL:[NSURL fileURLWithPath:[[NSBundle mainBundle] pathForResource:@"index" ofType:@"html" inDirectory:@"web" ]]]];
    
    transcriptView = [[UIWebView alloc] initWithFrame:CGRectMake(0,0,1024,768)];
    transcriptView.scrollView.bounces = NO;
    transcriptView.hidden = YES;
    [self.view addSubview:transcriptView];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (BOOL)webView:(UIWebView *)WebView shouldStartLoadWithRequest:(NSURLRequest *)request navigationType:(UIWebViewNavigationType)navigationType
{
    if([[[request URL] absoluteString] hasSuffix:@".pdf"]) {
        [transcriptView loadRequest:request];
        transcriptView.hidden = NO;
        btnClose.hidden = NO;
        [self.view bringSubviewToFront:transcriptView];
        [self.view bringSubviewToFront:btnClose];
        
        return NO;
    }
    return YES;
}

- (IBAction)onClose:(id)sender {
    transcriptView.hidden = YES;
    btnClose.hidden = YES;
}
@end
